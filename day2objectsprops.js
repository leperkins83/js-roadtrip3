var studentFirstName = 'joe'; //multiple vars follow
//instead of typing a bunch of variables, consolidate joe's info into an object

var student1 = {
  firstNmae: 'joe',
  lastName: 'rogan',
  age: 44,
  eyeColor: 'brown',
  grades: [90, 88, 92],
  holla: function() {
    alert("I'MA BEAT YO")
  },
  children: {
    frank: {
      age: 5,
      height: 56
    },
    rain: {
      age: 7,
      height: 42
    }
  }
};

console.log(student1.children.rain.height);
