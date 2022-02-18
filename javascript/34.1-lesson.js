// In order to handle the click event of the button in JavaScript, we first need to take its reference using its id
// Events
// The document.getElementById() function allows you to select an HTML element using its id attribute.
// Now, btn is a variable that refers to the button.
let btn = document.getElementById("myButton");

// onclick Event
// Now, since we have the button in JavaScript, we can set its onclick event to our desired function.
// btn.onclick = hello;

// window.onload Event
// Another important step is to make sure the document has loaded before taking the reference of an element in JavaScript.
// This can be done using the onload event of the window.
// The event handler needs to be a function, which is why the function keyword is used.
// window.onload = function () {
//   let btn = document.getElementById("myButton");
//   btn.onclick = hello;
// };

// We can also create a function right when defining the event handler.
// This way, we do not need to declare a separate function and assign it to the event. Instead, we define a function as the event handler using this syntax.
btn.onclick = function () {
  console.log("Hello");
};

// Handling Events
// Now, we need to handle the input event of both text fields and update their values based on the following formula: Fahrenheit = (Celsius * 9/5) + 32
window.onload = function () {
  let c = document.getElementById("celsius");
  let f = document.getElementById("fahr");
  c.oninput = function () {
    f.value = (c.value * 9) / 5 + 32;
  };
  f.oninput = function () {
    c.value = ((f.value - 32) * 5) / 9;
  };
};
// We handle the oninput events for both text fields and set the value of the other field using the formula
