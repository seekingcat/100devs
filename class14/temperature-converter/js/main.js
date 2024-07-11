//Write your pseduo code first!

// add a click listener
// grab the value from the input
// convert using a formula
// add the converted value to the h2

const button = document.querySelector('#convert');

button.addEventListener('click', converter);

function converter() {
  let cels = Number(document.querySelector('#temp').value);
  let fahr = (cels * 9) / 5 + 32;
  document.querySelector(
    '#converted'
  ).innerHTML = `${cels}&deg; C is ${fahr}&deg; F`;
}
