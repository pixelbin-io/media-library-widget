
import { setupMessageListener , EventCommunicator } from "./events.js";
import {  WIDGET_VARIABLES , events } from  "./constants.js";
import { createURLs } from "./util.js";

export class Widget extends EventCommunicator {

  isMediaLibraryVisible = false;
  isLibraryLoaded = false;
  originalBodyOverflow = null;
  iframe;
  fullscreenContainer;
  messageHandler = null;
  isFullscreen = false;

  pixelbinURL = "pixelbinz0.de"
  
   
    constructor({
      options: options,
      callbacks = {},
      element: buttonPlaceHolder,
      mlId: mediaLibraryId,
    }) {
      super();
      
    options.pixelbinURL = options.pixelbinURL || this.pixelbinURL; 
    const widgetOptions = {
      ...options
    };
    this.setupEventHandlers(callbacks)
    this.isFullscreen = !!options.inline_container;
    var { initialURL, mediaLibraryUrl } = createURLs(options, mediaLibraryId, options);
    widgetOptions.mlUrl = initialURL;
    widgetOptions.callbacks = callbacks;
    this.setupButton(buttonPlaceHolder, options);
    this.createIFrameAndContainer(options, mediaLibraryUrl);
    const widgetConfig = widgetOptions;
    const config = WIDGET_VARIABLES.reduce((accumulatedConfig, currentVariable) => {
      if (widgetConfig[currentVariable] !== undefined) {
        accumulatedConfig[currentVariable] = widgetConfig[currentVariable];
      }
      return accumulatedConfig;
    }, {});

    console.log(initialURL);
    this.messageHandler = setupMessageListener({
      ifr: this.iframe,
      mlId: mediaLibraryId,
      mlUrl: initialURL,
      callbacks: {
        uploadHandler: this.emitUploadData.bind(this),
        errorHandler: this.emitErrorData.bind(this),
        identityHandler: this.emitIdentityData.bind(this),
        deleteHandler: this.emitDeleteData.bind(this),
        insertHandler: (e) => {
          this.emitInsertData(e);
          if (!this.isFullscreen) {
            this.handleHide();
          }
        },
      },
      iframeLoaded: this.handleLibraryLoaded,
      hideCms: this.handleHide,
      config
    })
    this.appendAndFocus(widgetOptions);
    this.show = (showConfig = {}) => {
      this.messageHandler.then((e) => {
        e.sendMessage(events.show, {
          mlId: mediaLibraryId,
          options: {
            ...showConfig,
            config: showConfig,
          },
          config: showConfig,
        });
        this.handleShow();
      });
      return this;
    };
    this.hide = () => {
      this.messageHandler.then((e) => {
        e.sendMessage(events.hide, {
          mlId: mediaLibraryId,
        });
        this.handleHide();
      });
      return this;
    };
        
       
    }

    
    
  
    appendAndFocus(e) {
      var targetElement = this.isFullscreen ? this.iframe : this.fullscreenContainer;
      
      let parentElement = document.body; 
      if (this.isFullscreen) {
        parentElement = e.inline_container;
        if (typeof parentElement == "string") {
          parentElement = document.querySelector(parentElement);
        }
        if (!parentElement) {
          throw new Error("Element Not Found (" + e.inline_container + ")");
        }
      }
      
      parentElement.appendChild(targetElement);      
      this.iframe.focus();
    }
    /**Button setup */

    setupButton(buttonPlaceholder, options) {
      // Determine the target element based on the provided placeholder
      const targetElement = typeof buttonPlaceholder === 'string' 
                            ? document.querySelector(buttonPlaceholder) 
                            : buttonPlaceholder;
      
      // If the target element doesn't exist, exit the function
      if (!targetElement) {
        return;
      }
    
      // Hide the target element
      targetElement.style.display = 'none';
    
      // Create the button element and set its properties
      const openButton = document.createElement('button');
      openButton.className = options.button_class || 'pixelbin-button';
      openButton.textContent = options.button_caption || 'Open Media Library';
    
      // Insert the button into the DOM, before the target element
      targetElement.parentNode.insertBefore(openButton, targetElement);
      const displayFrame = this.handleShow;
      // Add a click event listener to the button
      openButton.addEventListener('click', function(event) {
        // Call the handler function
        displayFrame();
    
        // Prevent the default action and stop propagation
        event.preventDefault();
        event.stopPropagation();
      }, false);
    }
    

    /** IFrame Creation */
  createIFrameAndContainer(options, mediaLibraryUrl) {

    const onMediaQueryChange = (e) => {
      window.requestAnimationFrame(() => {
        if (e.matches) {
          this.fullscreenContainer.style.padding = "25px";
        } else {
          this.fullscreenContainer.style.padding = "25px 0";
        }
      });
    };

      this.iframe = document.createElement("iframe");
      this.iframe.setAttribute("src", mediaLibraryUrl);
      this.iframe.setAttribute("frameborder", "no");
      this.iframe.setAttribute("allow", "camera");
      if (this.isFullscreen) {
        this.iframe.setAttribute("width", "100%");
        this.iframe.setAttribute("height", "100%");
        this.iframe.style.border = "none";
      } else {
        this. iframe.setAttribute("width", "100%");
        this.iframe.setAttribute("height", "100%");
        this.iframe.style.boxShadow = "0 0 50px rgba(0, 0, 0, 0.8)";
      }
      if (!this.isFullscreen) {
        this.fullscreenContainer = document.createElement("div");
        this.fullscreenContainer.style.position = "fixed";
        this.fullscreenContainer.style.top = "0";
        this.fullscreenContainer.style.left = "0";
        this.fullscreenContainer.style.height = "100%";
        this.fullscreenContainer.style.width = "100%";
        this. fullscreenContainer.style.boxSizing = "border-box";
        this.fullscreenContainer.style.backgroundColor = "rgba(0,0,0,0.5)";
        this.fullscreenContainer.style.zIndex = options.z_index || 99999;
        if (matchMedia) {
          const mediaQuery = window.matchMedia("(min-width: 700px)");
          mediaQuery.addListener(onMediaQueryChange);
          onMediaQueryChange(mediaQuery);
        }
        this.fullscreenContainer.style.visibility = "hidden";
        this.fullscreenContainer.appendChild(this.iframe);
      }
  
  }

  /**
   * Show  + Hide
   * 
   */

  toggleVisibility = () => {

    const closeOnEscapeKeyPress = (e) => {
      if (e.keyCode === 27) {
        this.hide();
      }
    };

    const adjustPosition = () => {
      
      //var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      var iframeRect = this.iframe.getBoundingClientRect();
        this.messageHandler.then((e) => {
            
            e.sendMessage(events.adjustMultiSelector, {
              //scrollPosition: scrollPosition,
              iframeTop: iframeRect.top,
              iframeBottom: iframeRect.bottom,
              viewportHeight: window.innerHeight,
              iframeHeight : iframeRect.height
          });
        });
    }
  
    const element = this.isFullscreen ? this.iframe : this.fullscreenContainer;
    if (this.isLibraryLoaded && this.isMediaLibraryVisible) {
      element.style.visibility = "visible";
      element.focus();
      if (!this.isFullscreen) {
        document.addEventListener("keyup", closeOnEscapeKeyPress);
      }
      
      if(this.isFullscreen){
        adjustPosition();
        document.addEventListener("scroll",adjustPosition);
      }
    } else {
      element.style.visibility = "hidden";
      document.removeEventListener("keyup", closeOnEscapeKeyPress);
      document.removeEventListener("scroll",adjustPosition);
    }
  };

   handleShow = () => {
    if (!this.isFullscreen && document.body) {
      if (this.originalBodyOverflow === null) {
        this.originalBodyOverflow = document.body.style.overflow;
      }
      document.body.style.overflow = "hidden";
    }
    this.isMediaLibraryVisible = true;
    this.toggleVisibility();
    this.emitShowData();
  };


  handleHide = () => {
    if (!this.isFullscreen && document.body && this.originalBodyOverflow !== null) {
      document.body.style.overflow = this.originalBodyOverflow;
      this.originalBodyOverflow = null;
    }
    this.isMediaLibraryVisible = false;
    toggleVisibility();
    this.emitHideData();
  };

  handleLibraryLoaded = () => {
    this.isLibraryLoaded = true;
    this.toggleVisibility();
  };




  
  /**
   * 
   * @returns Emti Events
   */

    emitShowData() {
      return this.emit("show");
    }
    emitHideData() {
      return this.emit("hide");
    }
    emitInsertData(e) {
      return this.emit("insert", e);
    }
    emitIdentityData(e) {
      return this.emit("identity", e);
    }
    emitErrorData(e) {
      return this.emit("error", e);
    }
    emitUploadData(e) {
      return this.emit("upload", e);
    }
    emitDeleteData(e) {
      return this.emit("delete", e);
    }

    setupEventHandlers({
      showHandler = () => {},
      hideHandler = () => {},
      insertHandler = () => {},
      identityHandler = () => {},
      errorHandler = () => {}
  } = {}) {
      this.on("show", showHandler);
      this.on("hide", hideHandler);
      this.on("insert", insertHandler);
      this.on("identity", identityHandler);
      this.on("error", errorHandler);
  }
  
  }