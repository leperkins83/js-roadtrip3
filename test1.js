//Create an Array with 3 values
//Using forEach, log every value inside the array to the console

var myArray = ["snow", "rain", "sleet"];

myArray.forEach(function (precip) {
  console.log(precip);
});


//change forEach to map
//assign map's result to a variale
//log only the second value inside that variable
//(remember map always returns an array and undefined for every value if you do not use the word return)

var myArray = ["snow", "rain", "sleet"];

var result = myArray.map(function (precip) {
  return precip;
});

console.log(result[1]);

//change return value

var myArray = ["snow", "rain", "sleet"];

var result = myArray.map(function (precip) {
  return 'sun';
});

console.log(result);


//level 2
var num = 33;

function getFullNameandAge(first, last) {
  var fullName = first + " " + last;
  return fullName + " and age is "//not finished
}

console.log(fullName);
// a closure is used to build function factories. it wraps up variables etc into an environment
//closure- when a function uses a varialbe outside of it, traps or 'closes' data.
