// start slingin' some d3 here.
$(document).ready(function() {
  //spacebar
  var moveSelection = function(e) {
    if (e.keyCode === 32) {
      //add pixels to the character to the y axis
    }
  };








  //event listener when the document is ready
  (function docReady() {
    window.addEventListener('keydown', moveSelection);
  })();

});