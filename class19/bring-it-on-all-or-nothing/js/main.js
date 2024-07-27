// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let ourVariable = true;
alert(ourVariable);

// Declare a variable, reassign it to your favorite color, and console log the value

let myFaveColor;
myFaveColor = 'red';
console.log(myFaveColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function averageThree(n1, n2, n3, n4) {
  return (n1 + n2 + n3) / n4;
}

console.log(averageThree(2, 4, 6, 3));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function toThePower(num1, num2) {
  console.log(num1 ** num2);
}

toThePower(3, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
