var userInput = 2.3;
var inputValid = false;
var outputString;

var validateInput = function(){
  parseInt(userInput)
  if (Number.isInteger(userInput)&&((userInput>=1))){
    return true;
    console.log(userInput);
  } else {
    alert(userInput + " is not valid input.  Please enter a positive integer:");
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
      };
      outputString = outputString + "<li>" + transformIndex + "</li> <br>";
    };
  };
};
