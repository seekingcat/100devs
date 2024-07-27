//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function exactCopy(arr) {
  let newCopy = [];
  for (let i = 0; i < arr.length; i++) {
    newCopy.push(arr[i]);
  }
  return newCopy;
}

console.log(exactCopy([3, 7, 'polar', false]));
