import { events , parseData} from "./constants.js";
import { logger } from "./constants.js";



export class EventCommunicator extends EventTarget {
  emit(eventName, detail) {
    const event = new CustomEvent(eventName, { detail });
    this.dispatchEvent(event);
  }

  on(eventName, listener) {
    const wrappedListener = (event) => {
      if(event.detail){
        const detail = parseData(event.detail);
        listener(detail.data);
      }else {
        listener();
      }
    }
    this.addEventListener(eventName, wrappedListener);

    // Store the reference to the wrapped listener so it can be removed later
    if (!this._listeners) {
      this._listeners = new Map();
    }
    if (!this._listeners.has(listener)) {
      this._listeners.set(listener, wrappedListener);
    }
  }

  off(eventName, listener) {
    if (this._listeners && this._listeners.has(listener)) {
      const wrappedListener = this._listeners.get(listener);
      this.removeEventListener(eventName, wrappedListener);
      this._listeners.delete(listener);
    }
  }
}


export const setupMessageListener = (options) => new Promise((resolve, reject) => {
  var isLoaded = false;
  const emitter = createIframeMessageEmitter(options); // Assuming it initializes some message handling logic

  const handleSendMessage = (eventType, data) => {
    emitter.send(eventType, data, {
      target: options.mlUrl.origin,
    });
  };

  // Listen for the iframe to load successfully
  options.ifr.addEventListener("load", () => {
    if (!isLoaded) {
      isLoaded = true;
      options.iframeLoaded(); // Call some callback indicating the iframe is loaded
      resolve({
        sendMessage: handleSendMessage, // Resolve the promise with an object containing the sendMessage function
      });
    }
  });

  // Listen for messages from other contexts (e.g., iframe or parent window)
  self.addEventListener("message", (event) => {
    let message = parseData(event);
    message = parseData(message.data); // This seems redundant or incorrect without context
    if (message && typeof message == "object" && message.type === "consoleLoaded") {
      handleSendMessage(events.init, options);
    }
  }, false);

  // Placeholder for handling iframe load errors
  options.ifr.addEventListener("error", function () {
    // Ideally, should call reject here to handle iframe load failures
  });
});

function createIframeMessageEmitter(messageHandlerConfig) {
    let iframe = messageHandlerConfig.ifr;
    let lastOrigin; // contains origin of last message
    let formattedAllowedOrigins = [messageHandlerConfig.mlUrl.origin];
    const eventHandlers = {
      [events.insert]: messageHandlerConfig.callbacks.insertHandler,
      [events.delete]: messageHandlerConfig.callbacks.deleteHandler,
      [events.identity]: messageHandlerConfig.callbacks.identityHandler,
      [events.hide]: () => {
        messageHandlerConfig.hideCms();
      },
      [events.error]: messageHandlerConfig.callbacks.errorHandler,
      [events.upload]: messageHandlerConfig.callbacks.uploadHandler,
    }
    const validateTarget = (origin) => {
        if (!origin || !origin.length) {
            throw "PostMessage - target not set!";
        }
    };
    const handleMessageEvent = (event) => {
      var eventData;
      if (~formattedAllowedOrigins.indexOf(event.origin)) {
        lastOrigin = event.origin;
        if ((eventData = parseData(event.data, event.origin))) {
          if (eventData.mlId && eventData.mlId == messageHandlerConfig.mlId) {
            const eventType = eventData.type;
            const handler = eventHandlers[eventType];

            if (handler) {
              logger.log(`[postmessage]: found matching handler for '${event.type}' event from: ${event.origin}`,event.data);
              handler(event.data, event.data.type, event);
            }
          }
        }
      }
    };
    validateTarget(formattedAllowedOrigins);
    self.addEventListener("message", handleMessageEvent, false);
    return {
      send: (eventType, eventData, origin = {}) => {
        origin = origin.target || lastOrigin;
        validateTarget(origin);
        try {
          logger.log(`[postmessage]: posting message to: ${origin}`);
          iframe = iframe instanceof HTMLIFrameElement ? iframe.contentWindow : iframe;
          iframe.postMessage(JSON.stringify({
              type: eventType,
              data: eventData,
          }), origin);
        } catch (error) {
          logger.error(`[postmessage]: failed to post message to target: ${origin}`, error);
        }
      },
      close: () => self.removeEventListener("message", handleMessageEvent),
    };
  
}
