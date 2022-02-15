// Loops
// Loops allow you to run the same code multiple times.
// The for loop has the following syntax:
for (initializer; condition; final - expression) {
  // code to run
}

// An example for loop outputting the number 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Another loop, which outputs only the even numbers from 0 to 20.
// We increment i by 2 after each iteration, resulting in only the even numbers.
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// while loop
while (condition) {
  //code to run
  //final-expression
}
// It runs until the condition is true.
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// break
// The break statement allows you to exit a loop prematurely.
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    // This will exit the loop when i reaches the value 3.
    break;
  }
  console.log(i);
}

// continue
// The continue statement is used to skip an iteration of the loop, and continue from the next one.
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    // This will skip the number 5.
    continue;
  }
  console.log(i);
}
// Another example of the continue statement.
let sum = 0;
for (let i = 5; i < 8; i++) {
  if (i == 6) {
    continue;
  }
  sum += i;
}
console.log(sum);
