// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str) {
  const wordArr = str.split('');
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === '-') {
      wordArr[i + 1] = wordArr[i + 1].toUpperCase();
      delete wordArr[i];
    }
  }
  return wordArr.join('');
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

function filterRange(arr, a, b) {
  let newArr = [];
  for (const num of arr) {
    if (num >= a && num <= b) {
      newArr.push(num);
    }
  }
  return newArr;
}

console.log(filterRange([5, 3, 8, 1], 1, 4));

// The function should not modify the array. It should return the new array.

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    return arr.filter((item) => item >= a && item <= b);
  }
}

console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4));
// The function should only modify the array. It should not return anything.

// Sort in decreasing order
// sort an array of numbers in decreasing order

function sortDecrease(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortDecrease([5, 2, 1, -10, 8]));

function sortIncrease(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortIncrease([5, 2, 1, -10, 8]));

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

function copySorted(arr) {
  const newArr = [...arr].sort();
  return newArr;
}

console.log(copySorted(['HTML', 'JavaScript', 'CSS']));

// Create a function copySorted(arr) that returns such a copy.
