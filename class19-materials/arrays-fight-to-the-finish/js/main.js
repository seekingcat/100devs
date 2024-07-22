//Create an array of movie titles. Loop through the array and each element to the h2.

const myMovies = ['Sister Act', 'Matrix', 'Amadeus', 'Deadpool'];
const h2 = document.querySelector('h2');

for (let i = 0; i < myMovies.length; i++) {
  console.log(myMovies[i]);
  h2.innerText += ` ${myMovies[i]}`;
}
//Create an array of numbers. Loop through the array and three to each number and replace the old number.

const myNums = [1, 2, 3, 4, 5];

// myNums.forEach((num) => (num += 3));

const myNumsPlusThree = myNums.map((num) => num + 3);
console.log(myNumsPlusThree);

//Find the average of all the numbers from question three

let total = 0;
for (let i = 0; i < myNumsPlusThree.length; i++) {
  total += myNumsPlusThree[i];
}
console.log(total / myNumsPlusThree.length);
