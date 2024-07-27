//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function countUp(num) {
  let myArr = [];
  for (let i = 1; i <= num; i++) {
    myArr.push(i);
  }
  return myArr;
}

console.log(countUp(100));
