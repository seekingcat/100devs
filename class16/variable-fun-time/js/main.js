//--- Easy
//create a variable and assign it a number

let myNumber = 17;

//minus 10 from that number

myNumber -= 10;

//print that number to the console

console.log(myNumber);

//--- Medium
//create a variable that holds a value from the input

// let myInputNumber = Number(
//   document.querySelector('#danceDanceRevolution').value
// );

//add 25 to that number

// myInputNumber += 25;

// //alert that number

// alert(myInputNumber);

//--- Hard
//create a variable that holds the h1

const h1 = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables

h1.addEventListener('click', checkSum);

function checkSum() {
  let myInputNumber = Number(
    document.querySelector('#danceDanceRevolution').value
  );
  console.log((myInputNumber += 25));
}
