var userInput = 2.3

var validate = function(){
  parseInt(userInput)
  if (Number.isInteger(userInput)&&((userInput>=1))){
    return userInput ;
    console.log(userInput);
  } else {
    alert(userInput + " is not valid input.  Please enter a positive integer:");
  };
};
validate(userInput);
