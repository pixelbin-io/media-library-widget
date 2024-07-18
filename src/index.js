import { Widget } from "./widget.js";

((window) => {
    const init = (conifg, callbackFunctions, container) => {
      return new Widget({
        options: conifg,
        callbacks: callbackFunctions,
        element: container,
        mlId: 12345,
      });
    };
    window.pixelbin = window.pixelbin || {}; 
    window.pixelbin.openMediaLibrary = (e, callbackFunctions, n) =>
      init(e, callbackFunctions, n).show(e);
    window.pixelbin.createMediaLibrary = (e, callbackFunctions, n) =>
      init(e, callbackFunctions, n);
  })(self);

