// ELOQUENT JS PYRAMID

// let str = '';
// let userNum = Number(prompt('Enter a number'));

// for (let i = 0; i <= userNum; i++) {
//   str += '#';
//   console.log(`${str}\n`);
// }

let str1 = '';
let str2 = '';
for (let i = 0; i <= 8; i++) {
  if (i % 2 !== 0) {
    str1 += '#';
    str2 += ' ';
  } else {
    str1 += ' ';
    str2 += '#';
  }
}

for (let row = 0; row <= 8; row++) {
  if (row % 2 === 0) {
    console.log(`${str1}\n`);
  } else console.log(`${str2}\n`);
}
// console.log(str1);
// console.log(str2);

//  FIZZBUZZ

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FIZZBUZZ');
//   } else if (i % 3 === 0) {
//     console.log('FIZZ');
//   } else if (i % 5 === 0) {
//     console.log('BUZZ');
//   } else {
//     console.log(i);
//   }
// }

// ------------------------------------------------------------------------------------------------

// JSWAY VARIABLES

// let userPrice = Number(prompt('Enter the price of the meal'));
// console.log(
//   `The final price including VAT is £${userPrice * (1.206).toFixed(2)}`
// );

// let userTemp = Number(prompt('Enter the temperature in Celcius'));
// console.log(
//   `The temperature is ${userTemp} celcius and ${
//     (userTemp * 9) / 5 + 32
//   } fahrenheit`
// );

// let number1 = 3;
// let number2 = 5;
// console.log(number1, number2);
// number1 = number1 + number2;
// number2 = number1 - number2;
// number1 = number1 - number2;
// console.log(number1, number2);

// JSWAY LOOPS

// INPUT VALIDATION

// let userInput = Number(prompt('Enter a number'));

// while (userInput >= 100 || userInput <= 50 || isNaN(userInput)) {
//   userInput = Number(prompt('Please enter the right number'));
//   if (userInput > 50 && userInput < 100) console.log('CORRECT');
// }

// MULTIPLICATION TABLE

// let multNum = Number(prompt('Enter a number'));
// while (isNaN(multNum)) {
//   multNum = Number(prompt('Please enter an actual number'));
// }
// if (multNum < 10) {
//   for (let i = 1; i <= 12; i++) {
//     console.log(`${i} times ${multNum} is ${i * multNum}`);
//   }
// }

//

// let yesOrNo = prompt("What's your answer?").toLowerCase();
// while (yesOrNo !== 'no' && yesOrNo !== 'yes') {
//   yesOrNo = prompt('Please enter yes or no').toLowerCase();
// }
// if (yesOrNo === 'yes') {
//   console.log('I wholeheartedly agree');
// } else if (yesOrNo === 'no') {
//   console.log("I'll have to let you think some more!");
// }
