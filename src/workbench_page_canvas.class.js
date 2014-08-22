(function(){


  'use strict';

  if(fabric.StaticCanvas){
    fabric.warn('fabric.WorkbenchPageCanvas is already defined.');
    return;
  }


  fabric.WorkbenchPageCanvas = fabric.util.createClass(fabric.Canvas, {


    resizeHandler: undefined,
    resizeEventEmitter: undefined,


    initialize: function(el, options){
      options || (options = {});
      this.callSuper("initialize", el, options);
      this.on("after:render", this.onAfterRender);
    },


    resizeBleedRegions: function(){
      this.setBleedRegions();
    },


    setBleedRegions: function(){
      if(this.width === 300 && this.height === 150) return false;
      this.setOverlayImage("/assets/book_builder/bookbuilder-bleed-regions.png", this.renderAll.bind(this), {
        width: this.width,
        height: this.height,
        originX: "left",
        originY: "top"
      });
    },


    onAfterRender: function(evt){
      this.setBleedRegions();
    },


    toDatalessObject: function(propertiesToInclude){
      var obj = this.callSuper("toDatalessObject");
      delete obj.overlayImage;
      return obj;
    },


  });

})();