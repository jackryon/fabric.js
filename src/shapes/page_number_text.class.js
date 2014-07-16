(function() {

  var clone = fabric.util.object.clone;


  // create PageNumberText class from Text class
  fabric.PageNumberText = fabric.util.createClass(fabric.IText, {
    type: "page-number-text",
  });


  fabric.PageNumberText.fromObject = function(object) {
    return new fabric.PageNumberText(object.text, clone(object));
  };


})();
