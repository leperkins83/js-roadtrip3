//another way to make an object:

function Car() {
  this.brand = brand;
  this.model = model;
  this['year'] = year;
}

var brentsTruck = new Car('ford', 'f-150', 1995);
//the above is advantageous bc you can add many objects using only 1 line of code for each

console.log(brentsTruck.model);

brentsTruck.honk = function() {
  console.log(this.brand);
};

brentsTruck.honk(); //prints the brand


//the other way we did this was:

var brentsTruck = {
  brand: "ford",
  model: "f-150",
  year: 1995,
  honk: function() {
    console.log(this.brand);
  }
};

brentsTruck.honk(); //will print ford
