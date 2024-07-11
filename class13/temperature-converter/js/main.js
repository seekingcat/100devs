//Write your pseduo code first!

// get a value is celcius
// convert to to fahrenheit
// then return or maybe console.log the result

const button = document.querySelector('#convert');

button.addEventListener('click', convert);

function convert() {
  let temp = Number(document.querySelector('#tempCelcius').value);
  let fahr = (temp * 9) / 5 + 32;
  document.querySelector('#tempFahrenheit').innerText = fahr;
}
