//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function multiply(arr) {
  let product = 1;
  arr.map((num) => {
    product *= num;
  });
  return product;
}

console.log(multiply([2, 3, 4]));
