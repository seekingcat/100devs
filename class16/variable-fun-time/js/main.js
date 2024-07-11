//--- Easy
//create a variable and assign it a number

let myNum = 30;

//minus 10 from that number

myNum -= 10;

//print that number to the console

console.log(myNum);

//--- Medium
//create a variable that holds a value from the input

//add 25 to that number

// newInfo += 25;

// //alert that number
// alert(newInfo);

//--- Hard
//create a variable that holds the h1

const headline = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables

headline.addEventListener('click', sumUp);

function sumUp() {
  let newInfo = Number(document.querySelector('#danceDanceRevolution').value);
  console.log(newInfo + myNum);
}
