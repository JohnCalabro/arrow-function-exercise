// ES5 Map Callback
// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }

//question 1:
// ES2015 Arrow Functions Shorthand
// Refactor the above code to use two arrow functions. Turn it into a one-liner.

//answer:
const double = arr =>  arr.map(val => val * 2);


// question 2:
// Refactor the following function to use arrow functions:
// Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }

//answer:
const squareAndFindEvens = (numbers) =>{
  var squares = numbers.map((num) => {
    return num ** 2;
  });
  var evens = squares.filter((square) => {
    return square % 2 === 0;
  });
  return evens;
}