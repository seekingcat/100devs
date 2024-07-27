// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function checkIt(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  if (first > last) alert('hi');
  else if (first < last) alert('bye');
  else alert('we close in an hour');
}

checkIt([1, 2, 1]);
