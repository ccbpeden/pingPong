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
  for(index = 1; index<=userInput; index++){
    var transformIndex = index;
    outputString = outputString + "<li>" + transformIndex + "</li> <br>";
  };
  };
};
