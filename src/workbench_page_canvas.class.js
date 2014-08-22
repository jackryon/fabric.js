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
    },


    resizeBleedRegions: function(){
      this.setBleedRegions();
    },


    setBleedRegions: function(w, h, imgPath){
      if(!w || !h) return false;
      this.setOverlayImage(imgPath, this.renderAll.bind(this), {
        width: w,
        height: h,
        originX: "left",
        originY: "top"
      });
    },


    toDatalessObject: function(propertiesToInclude){
      var obj = this.callSuper("toDatalessObject");
      delete obj.overlayImage;
      return obj;
    },


  });

})();