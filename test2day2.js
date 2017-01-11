//turning an declaration into an expression

var addTwo = function(num); {
  return num + 2;
};

addTwo(6)();   //or
console.log(addTwo(6));

console.log(addTwo(6)()); //an extra () if this is inside the function:

var addTwo = function(num); {
  var adder = 2;
  return function(){ //anonymous function inside another function
    return adder + num;
  }
};

//obey your last order even if it contradicts first or is same as- this is how JS works

function () {
  if(typeof num != 'number') {
    return;
  }
  return num + 2;
}

//if var is in your function it auto gets hoisted to top but will be undefined
//function expressions are NEVER hoisted. only vars which become undefined. wherever your return ends up,
//the function quits even if there is more code to run.
//declarations always get hoisted to the top- you can either write your code with defs, decls and express. at the top
//and conditionals at the bottom
//OR you can write conditionals first as long as you are aware of what gets hoisted and what doesnt
