// Functions
// A function is a block of code designed to perform a particular task.
// The purpose of a function is to create it once and call it multiple times when needed to perform particular tasks.

// Defining a Function
// To define a function, use the function keyword, followed by a name, followed by a set of parentheses ().
function name() {
  //code to be executed
}

// create a function called "login" which outputs a simple message.
function login() {
  console.log("Hi!");
}

// Calling a Function
// After defining our function, we can call it in our program as many times as we want.
// To call a function, start with the name of the function, then follow it with parentheses.
login();
login();

// Parameters
// Functions can have parameters, which they can use in their code.
// The parameters are defined in the parentheses, and can be used like variables in the function.
function login(user) {
  console.log("Hi, " + user);
}
// Now, when calling the function, we need to pass it a value for the power parameter inside the parentheses.
login("james");
login("bob");

// Return statement
// In many cases we need to assign the result of a function to a variable, instead of outputting it.
// For that, the return statement is used.
function add(x, y) {
  return x + y;
}
// Now, we can assign a variable to the function result.
let result = add(123, 321);
console.log(result);

// alert() Function
// JavaScript has some useful functions built-in.
// For example, the alert() function is used to create a message box.
alert("Welcome");
// Another example of alert()
function test(a, b) {
  if (a > b) {
    return a * b;
  } else {
    return b / a;
  }
}
alert(test(5, 15));
