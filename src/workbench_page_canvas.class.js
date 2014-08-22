(function(){


  'use strict';

  if(fabric.WorkbenchPageCanvas){
    fabric.warn('fabric.WorkbenchPageCanvas is already defined.');
    return;
  }


  fabric.WorkbenchPageCanvas = fabric.util.createClass(fabric.Canvas, {


    initialize: function(el, options){
      options || (options = {});
      this.callSuper("initialize", el, options);
      this.on("before:render", this.onBeforeRender);
    },


    resizeBleedRegions: function(){
      this.setBleedRegions();
    },


    setBleedRegions: function(){
      if(this.width === 300 && this.height === 150) return false;
      console.warn("pass overlay image path into the initializer for this class");
      this.setOverlayImage("/assets/book_builder/bookbuilder-bleed-regions.png", this.renderAll.bind(this), {
        width: this.width,
        height: this.height,
        originX: "left",
        originY: "top"
      });
    },


    onBeforeRender: function(evt){
      this.setBleedRegions();
    },


    toDatalessObject: function(propertiesToInclude){
      var obj = this.callSuper("toDatalessObject");
      delete obj.overlayImage;
      return obj;
    },


  });

})();