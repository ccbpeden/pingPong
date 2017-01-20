var userInput;
var outputString = "";
var inputValid = false;

var play = function(){
  var audio = document.getElementById("audio");
  if (inputValid){
   audio.play();
  };
};

var validateInput = function(){
  if (Number.isInteger(userInput)&&(userInput >= 1)){
    var validVar = true;
    return validVar;
    console.log("validvar" + validVar);
  } else {
    alert("Sorry, friend, but this is not valid input.  Please enter a positive integer:");
    var validVar = false;
    return validVar;
  };
};

var transformInput = function(){
  if (inputValid){
    outputString = "";
    for(index = 1; index<=userInput; index++){
      var transformIndex = index;
      if((transformIndex % 15) === 0){
        transformIndex = "ping-pong";
      }else if ((transformIndex % 5) === 0){
        transformIndex = "pong";
      }else if ((transformIndex % 3) === 0){
        transformIndex = "ping";
      };
      outputString = outputString + "<li>" + transformIndex + "</li>";
    };
  };
  return outputString;
};

$(document).ready(function() {
  $("form#input-section").submit(function(event) {
    event.preventDefault();
    userInput = parseInt($("input#number").val());
    inputValid = validateInput();
    play();
    outputString = transformInput();
    $("#result").hide();
    $(".output").empty().append(outputString);
    $("#result").slideDown(4000);
  });
});
