$(document).ready(function(){


  $('#submit').on('click', function(){
      // get variable inputs
      var x = $('#firstVar').val();
      var y = $('#secondVar').val();
      var operation = $('#operation').val();
      console.log("x = " + x + " y = " + y + " operation = " + operation);
      // assemble input into object
      var inputObject = {
        "x": x,
        "y": y,
        "operation": operation
      };

      // console.log("input object x " + inputObject.x + " input object y " + inputObject.y + " operation: " + operation);
    sendObject (inputObject);
  });

  $('#reset').on('click', function(){
    $('.outputDiv').children().remove();
  });

  function sendObject ( objectToSend ){
    console.table('in sendObject: ' + objectToSend);
    $.ajax({
      type: "POST",
      url: "/calculate" ,
      data: objectToSend,
      success: function(data) {
        console.log("success: " + data);
        displayAnswer (data);
      },//end success
      error: function()
      {
        console.log('error connecting..');
      }//end error
    });
  }

  function displayAnswer ( answer ){
    // console.log('in displayAnswer: ' + answer);
    var newParagraph = document.createElement('p');
    newParagraph.textContent = "1 h4v3 c41cu14t3d: " + answer;
    console.log(newParagraph);
    $('.outputDiv').append( newParagraph );
  }

});
