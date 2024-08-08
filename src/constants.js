import getLogger from "./logger.js";

export const logger = getLogger();

getLogger();



export const events = {
    init: "ML_WIDGET_INIT",
    show: "ML_WIDGET_SHOW",
    hide: "ML_WIDGET_HIDE",
    error: "ML_WIDGET_ERROR",
    insert: "ML_WIDGET_INSERT_DATA",
    identity: "ML_WIDGET_EXPOSE_IDENTITY",
    adjustMultiSelector: "ML_WIDGET_ADJUST_MULTISELECT"
  };

  /** api_key = access_key , cloud_name = zone_url */
  export  const configVariables = [
    "zone_url",
    "access_key", 
    //"username",
    //"timestamp", // deprecated
    //"signature",
    //"integration",
    "use_saml", // TODO : use_saml will always need to be implemented 
  ];
  
  export  const assetVariables = ["remove_header"]; 
  export  const WIDGET_VARIABLES = [
    //"integration", 
    "inline_container",
    "z_index",
    "multiple", 
    "max_files",
    "default_transformations", // TODO : need to implement this
    "insert_caption", 
    "remove_header", 
    "mode",
    "folder",
  ];

  export const SEARCH_ATTRIBUTES = [
    "datasourceId",
    "sortBy",
    "orderBy",
    "path",
    "search"
  ]

  export  const SANDBOX_ATTRIBUTES = [
    "allow-forms",
    "allow-modals",
    "allow-orientation-lock",
    "allow-pointer-lock",
    "allow-popups",
    "allow-popups-to-escape-sandbox",
    "allow-presentation",
    "allow-same-origin",
    "allow-scripts",
    "allow-top-navigation",
    "allow-top-navigation-by-user-activation",
  ];

  export  const emptyFunction = () => {};

  export const parseData = (data, errorString) => {
    let json = null;
    try {
        json = "string" == typeof data ? JSON.parse(data) : data;
    } catch (error) {
      logger.error(`[postmessage]: failed to parse data from ${errorString}`, error);
    }
    return json;
};

