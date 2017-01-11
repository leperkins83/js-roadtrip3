// Video 3.1 accompanies this exercise

// Below is a function with multiple functions inside. Using your new
// knowledge of hoisting, analyze the load order of the thisIsWeird function.
// What is the value of result, when it is returned at the end of thisIsWeird?

function thisIsWeird() {
  function secret() {
    var unused3;
  }
  var result;
  function secret() {
    var unused1;
  }
  // The following line of code assigns a
  // secret function to the variable result.
  result = secret;
  function secret() {
    var unused2;
  }
  return result;
}

thisIsWeird()();













// Answer:
function secret() {
  var unused2;
}
//this is the last to get hoisted with result = secret and return result below it
//since its the last code, it gets its result return instead of the others
