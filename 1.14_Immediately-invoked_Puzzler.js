// Video 1.10 accompanies this Video

// Now the Pine Puzzle-makers have sent you a puzzle with a new set of
// functions to use on that puzzle. To display your overwhelming array and
// function expression mastery, alert the answer to the following question:
//
//    “What is obtained when the result of passing 9 into the fourth function
//    of the puzzlers array is then passed into the function whose array index
//    matches the result of passing 3 into the second function of the puzzlers
//    array?”
//
// To really impress them, the expression used in your alert should:
//
//  - Use just one line of code.
//  - Involve no manual calculation or hard-coded math on your part.
//  - Use indices of arrays to access functions.
//  - Use parentheses to pass in parameters to immediately-invoking functions.

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); }, // equals 0
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

result = puzzlers[3](9); //result of passing 9 into the fourth function
//    of the puzzlers array //retuns 4
var index = puzzlers[1](3); //result of passing 3 into the second function of the puzzlers
//    array
var finalResult = puzzlers[index](result); //puzzlers[0](4)

console.log(finalResult);


// Answer:
alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));

// Breakdown of the answer:
puzzlers[3](9) goes into a function, so pass it as a parameter:

puzzlers[index](   puzzlers[3](9)   )

Next, the index in the above function is equal to "the result of passing 3
into the second function", so index = puzzlers[1](3). Therefore:

puzzlers[   puzzlers[1](3)   ] (    puzzlers[3](9)   )

// Output:
22
