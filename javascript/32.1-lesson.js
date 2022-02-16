// Arrays
// Arrays allow you to store multiple values in a single variable.
// To create an array, we need to declare a variable and assign it to the list of values, enclosed in square brackets
let cart = ["banana", "apples", "milk"];

// To access an array element, we need to use its index in square brackets.
// For example, to access the first element
console.log(cart[0]);

// Similar to variables, we can modify the value of an element.
cart[2] = "bread";

// We can use loops to iterate over arrays.
// For example, let's output all the values of the array.
for (let x = 0; x < 3; x++) {
  console.log(cart[x]);
}
// During each iteration, the element under the index x is accessed.
