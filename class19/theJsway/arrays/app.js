// ************************** MUSKETEERS **********************************
console.log(
  '****************************** MUSKETEERS ***********************************'
);
// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".

const musketeers = ['Athos', 'Porthos', 'Aramis'];

// Shows each array element using a for loop.

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

// Adds the "D'Artagnan" value to the array.

musketeers.push("D'Artagnan");

// Shows each array element using the forEach() method.

console.log('************************ NEW ARRAY ************************');

musketeers.forEach((musketeer) => console.log(musketeer));

// Remove poor Aramis.

musketeers.splice(2, 1);

// Shows each array element using a for-of loop.

console.log('************************ NEW ARRAY ************************');

for (const musketeer of musketeers) {
  console.log(musketeer);
}

//  ************************** SUM OF VALUES **********************************

// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

console.log(
  '**************************** SUM OF VALUES *******************************'
);
const values = [3, 11, 7, 2, 9, 10];

function sumArr(arr) {
  let total = 0;
  arr.forEach((item) => (total += item));
  return total;
}

console.log(sumArr(values));

// //  *************************************** ARRAY MAXIMUM **************************************

// // Write a program that creates the following array, then calculates and shows the array's maximum value.
console.log(
  '**************************** ARRAY MAXIMUM *******************************'
);
const valueForMax = [3, 11, 7, 2, 9, 10];

function findMax(arr) {
  let max = 0;
  for (let item of arr) {
    if (item > max) max = item;
  }
  return max;
}

console.log(findMax(valueForMax));

// //  ************************************* LIST OF WORDS ****************************************

// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
console.log(
  '**************************** LIST OF WORDS *******************************'
);

let wordList = [];
let userWord = prompt('Enter the magic word');

while (userWord !== 'stop') {
  wordList.push(userWord);
  userWord = prompt('Enter the magic word');
}
console.log(wordList);
