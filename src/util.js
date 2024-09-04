import { configVariables , assetVariables, SEARCH_ATTRIBUTES, WIDGET_VARIABLES } from  "./constants.js"
 
 function urlConstructor(path, options, paramKeys, additionalParams = {}) {
    
    const baseURL = options.dev ? options.pixelbinURL : `https://console.${options.pixelbinURL}`;
   
    let queryParams = serializeQueryParamas(additionalParams, paramKeys, options);

    const fullUrl = `${baseURL}${path}?${queryParams.join("&")}`;
    return {
      origin: baseURL,
      href: fullUrl,
    };
  }
  
  
function serializeQueryParamas(additionalParams, paramKeys, options) {
    const serializeObject = (obj) => {
        return Object.keys(obj).map(key => `${key}:${encodeURIComponent(obj[key])}`).join("|");
    };
    let queryParams = [];

    Object.entries(additionalParams).forEach(([key, value]) => {
        queryParams.push(`${key}=${encodeURIComponent(value)}`);
    });
    paramKeys.filter(key => Boolean(options[key])).forEach(key => {
        const value = options[key];
        if (typeof value === "object" && !Array.isArray(value)) {
            queryParams.push(`${key}=${serializeObject(value)}`);
        } else {
            queryParams.push(`${key}=${encodeURIComponent(value)}`);
        }
    });
    return queryParams;
}

  export function createURLs(widgetOptions, mediaLibraryId) {

    const cloud_name = widgetOptions.cloud_name;
    const STORAGE_PATH = `/organization/${cloud_name}/media-library`;
    const PLAYGROUND_PATH = `/organization/${cloud_name}/playground`

    let initialURL = self.location;
    if (initialURL.origin === "null") {
      initialURL = new URL(self.origin);
    }
    const additionalParams = {
      is_widget : true,
      frameHost: `${initialURL.protocol}//${initialURL.host}`,
      ml_id: mediaLibraryId,
    };
    
    var mediaURL = "";
    if(widgetOptions.mode === "playground"){
      widgetOptions.url = widgetOptions.asset_url; 
       mediaURL = urlConstructor(
        PLAYGROUND_PATH,
        widgetOptions,
        [...configVariables, ...assetVariables],
        additionalParams
      );
  
    } else {
      widgetOptions.path = widgetOptions.folder;
      mediaURL = urlConstructor(
        STORAGE_PATH,
        widgetOptions,
        [...configVariables, ...assetVariables, ...SEARCH_ATTRIBUTES , ...WIDGET_VARIABLES],
        additionalParams
      );
    } 
    
    return { initialURL: mediaURL, mediaLibraryUrl: mediaURL.href };
  }