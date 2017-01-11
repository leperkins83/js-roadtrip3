
//many ways to find a value in a property in an object such as an author inside a book# inside myBox

var myBox = {
  book1: {
    author: "Charles Dickens"
  }
};

console.log(myBox.book1.author);

//or

console.log(myBox['book1']['author']);
console.log(myBox.book1['author']);
console.log(myBox['book1'].author);

var prop = "author";
console.log(myBox.book1[prop]);
//console.log(myBox.book1.prop); will not work
