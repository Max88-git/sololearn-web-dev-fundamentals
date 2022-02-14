// Decision Making
// An if statement specifies a block of code that we want to be executed if a specified condition is true.
if (condition) {
  statements;
}
// The code in an if statement executes only if the condition is: true
// The code compares the health variable's value and outputs the message if it's less than 1.
// If the condition is not true, the statements of the if will not execute.
let health = 0.5;
if (health < 1) {
  console.log("Game Over");
}

// Comparison Operators
// The following operator is used to compare if a value is greater than or equal to another: >=
if (points >= 100) {
  console.log("You Win!");
}

// else statement
if (condition) {
  // executed if condition is true
} else {
  // executed if condition is false
}
// Here is an example, that outputs a message based on the points value.
// You can have as many statements as you want inside the if and else. Just remember to enclose them in curly braces.
let points = 200;
if (points >= 100) {
  console.log("You Win!");
} else {
  console.log("Try Again");
}
// Another example
let age = 21;
if (age > 18) {
  console.log("Welcome");
} else {
  console.log("Not allowed");
}

// if else statement
// You can have as many if else statements as you want.
let temp = 75;

if (temp > 100) {
  console.log("Really Hot");
} else if (temp > 78) {
  console.log("Hot");
} else if (temp > 68) {
  console.log("Pleasant");
} else if (temp == 32) {
  console.log("Zero Celsius");
} else {
  console.log("Cold");
}
// Another example
let age = 35;
if (age > 65) {
  sale = 50;
} else if (age > 30) {
  sale = 25;
} else {
  sale = 10;
}

// Combining Conditions
// In case we want to combine conditions, we can use the logical AND (&&) operator
let age = 43;
if (age >= 18 && age < 65) {
  console.log("Adult");
}
// Similarly, we can use the OR operator (||), which returns true if any of the conditions are true.
let hour = 20;
let day = 3;
if (hour > 18 || day > 5) {
  console.log("Closed");
}

// Ternary Operator
// In cases when we need to assign a value based on a condition, we can use the ternary operator.
// The code above will assign the value "Closed" in case the condition is true, and "Open", if its not.
let status = hour > 18 ? "Closed" : "Open";
// The expression is equivalent to the following:
if (hour > 18) {
  status = "Closed";
} else {
  status = "Open";
}
