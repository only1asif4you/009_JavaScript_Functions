// JavaScript Functions

/*
function myFunction() {
  console.log("Hi Function");
}
myFunction();
myFunction();
*/

/*
 * Code-Driven Invocation :
 */

function myFunction(fullName, age, dateOfBirth = 2001) {
  console.log(
    "Hi " + fullName + " I am " + age + " My Date Of Birth " + dateOfBirth
  );
}
myFunction("ASIF", 23);
myFunction("RATUL", 25);

/*
 * Event-Driven Invocation :
 */
function isSubscribed() {
  console.log("Subscribed");
}
document.getElementById("btn").addEventListener("click", isSubscribed);

/*
 * Automatic (Self-Invoked) Invocation :
 */
(function (message) {
  console.log("I am Self-Invoking Function", message);
})("Hello");

/*
 * Function Expression :
 */
let maths = function (x, y) {
  console.log("Testing if I am working or not");
  return x * y;
};
console.log(maths(4, 4));
console.log(maths(5, 5));

/*
? We can define same variable name inside the function
*/
function newFunc() {
  let firstName = "Hi";
  console.log(firstName);
}

function newFuncs() {
  let firstName = "Hi";
  console.log(firstName);
}
newFuncs();

/*
? Anonymous Function 
*/
let numbers = [4, 5, 6, 7, 8];
let sqNumbers = numbers.map(function (number) {
  return number * number;
});
console.log(sqNumbers);

/*
? Array Function 
*/

/* Regular JavaScript Function : 
let add = function (x, y) {
  return x + y;
};
console.log(add(5, 6));
*/

let add = (x, y) => x + y;
console.log(add(5, 6));

/*
? Nested Function 
*/
function greet(firstName) {
  function sayHi() {
    alert("Hi " + firstName);
  }
  return sayHi();
}
greet("ASIF");
