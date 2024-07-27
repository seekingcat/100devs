// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let myFaveFood = 'mac and cheese';
// alert(myFaveFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let myFunkyStr = 'supercell';
// alert(myFunkyStr[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function divTwoMultThird(n1, n2, n3) {
  alert((n1 / n2) * n3);
}

// divTwoMultThird(10, 5, 5);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeIt(num) {
  return Math.cbrt(num);
}

console.log(cubeIt(64));

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function summerTime(month) {
  month === 'july' || month === 'august' || month === 'september'
    ? alert('YAY')
    : alert('BOOOOOO');
}

// summerTime('january');
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFive(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}

skipFive(15);
