//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

const numArr = [];

function countUp(num) {
  for (let i = 1; i <= num; i++) {
    numArr.push(i);
  }
  return numArr;
}

console.log(countUp(10));
