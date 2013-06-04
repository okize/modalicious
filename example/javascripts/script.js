$(document).on('ready', function() {

  $('#openModal').on('click', function(e){
    e.preventDefault();
    $('body').mdl();
  });





  // window.onload = function() {
  //   var firstAnchor = document.getElementById("dialog-start"),
  //       lastAnchor = document.getElementById("dialog-end");

  //   function keydownHandler(e) {
  //     var evt = e || window.event;
  //     var keyCode = evt.which || evt.keyCode;
  //       if(keyCode === 9) { // TAB pressed
  //         if(evt.preventDefault) evt.preventDefault();
  //         else evt.returnValue = false;
  //         firstAnchor.focus();
  //       }
  //     }
  //     if(lastAnchor.addEventListener) lastAnchor.addEventListener('keydown', keydownHandler, false);
  //     else if(lastAnchor.attachEvent) lastAnchor.attachEvent('onkeydown', keydownHandler);
  //   };

});