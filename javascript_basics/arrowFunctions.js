/**
Notes for Arrow Function:
1. function keyword NOT needed
2. let/const variableName = (argument) => {function body}
3. short hand: curly braces and return keyword NOT needed, return result directly after =>
4. brackets NOT needed in SINGLE parameter function's argument
5. do NOT bind "this" (avoid for methods) or "arguments". 
6. It can NOT be used as constructors or generators (I don't know what those mean yet...)

A good suggestion from developer Lars Schöning:
1. Use function in the global scope and for Object.prototype properties.
2. Use class for object constructors.
3. Use => everywhere else. 
 */

//Normal Functions

// Named function with multiple parameters
function sum(a, b) {
  return a + b;
}

// Converting to arrow function
let sum2 = (a, b) => a + b;
//console.log(sum2(2, 10));

// Named function with one parameter
function isPositive(number) {
  return number >= 0;
}
//Converting to arrow function
let isPostive2 = number => number >= 0;
//console.log(isPostive2(10));

// Named function with no parameter
function randomNumber() {
  return Math.random();
}
//
let random1 = () => Math.random();
//console.log(random1);

// Anonymous function with no name
document.addEventListener("click", function() {
  console.log("Clicked");
});
//

document.addEventListener("click", () => console.log("Clicked"));

//Arrow Functions with this keyword
class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function() {
      console.log("Function : " + this.name);
    }, 100);
  }
}
let person = new Person("Praveen");

person.printNameArrow();
person.printNameFunction();
