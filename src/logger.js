const consoleReference = self.console;

const LogLevels = Object.freeze({ NONE: 0, ERROR: 1, WARN: 2, INFO: 3, LOG: 4 });

const logMethods = ["error", "warn", "info", "log"];

const isLoggingSupported = typeof consoleReference !== "undefined" && typeof consoleReference.log === "function" && typeof consoleReference.error === "function" && typeof consoleReference.debug === "function" && typeof consoleReference.warn === "function" && typeof Function.prototype.apply === "function";

let defaultLogLevel, cachedLogger;

const handleConsoleGroup = (loggerInstance, method, message, fallbackMessage) => {
    if (consoleReference[method]) {
        message ? consoleReference[method](message) : consoleReference[method]();
    } else {
        loggerInstance.log(`----------- ${message || fallbackMessage} ----------- `);
    }
};

const createLogger = (config = {}) => {
    let currentLevel = config.level || LogLevels.NONE;
    const logger = {
        setLevel: (newLevel) => {
            currentLevel = newLevel;
            return logger;
        },
        getLevel: () => currentLevel || defaultLogLevel,
    };

    logMethods.forEach((method) => {
        logger[method] = (...args) => {
            if (isLoggingSupported) {
                const methodIndex = logMethods.indexOf(method);
                const currentLogLevel = logger.getLevel();
                if (methodIndex >= 0 && methodIndex + 1 <= currentLogLevel) {
                    consoleReference[method].apply(consoleReference, args);
                }
            }
            return logger;
        };
    });

    logger.groupCollapsed = (message) => handleConsoleGroup(logger, "groupCollapsed", message, "GROUP START");
    logger.group = (message) => handleConsoleGroup(logger, "group", message, "GROUP START");
    logger.groupEnd = () => handleConsoleGroup(logger, "groupEnd", null, "GROUP END");
    logger.debug = logger.log;

    return logger;
};

const getLogger = (config = {}) => {
    config.level = config.level || LogLevels.NONE;
    const loggerInstance = config.newInstance || !cachedLogger ? createLogger(config) : cachedLogger;
    if (!cachedLogger && !config.newInstance) {
        cachedLogger = loggerInstance;
    }
    return loggerInstance;
};


export default getLogger;
