var square = {
  width: 40,
  height: 40
};

console.log(square.height);

console.log("height: " + square.height);

square.area = square.width * square.height; //this is static- cant change the numbers of the square

console.log("area: " + square.area);

square.area = function() {
  return square.area = square.width * square.height;
};  //this way the math becomes dynamic so you can change the variables like below

console.log("height: " + square.height); //this will stay the same because height is not a function

console.log("area: " + square.area());

square.width = 20;

console.log('new area: ' + square.area());


var cars = {
  model: "",
  color: ""
},

ford: {
  "model": "f-150",
  color: "red"
}
};

cars.ford.color = 'green'; //changes the color property from red to green
cars.ford.year += 2;

console.log(cars.ford.year);
//ref exercise 4.5 for above code
