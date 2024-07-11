let total = 0;
let result = document.querySelector('#result');
let target = document.querySelector('#target');
let winner = document.querySelector('#winner');
let random;

document.querySelector('button').addEventListener('click', randomer);
document.querySelector('#zero').addEventListener('click', reset);
document.querySelector('#plusTwo').addEventListener('click', plusTwo);
document.querySelector('#plusSeven').addEventListener('click', plusSeven);
document.querySelector('#minusFive').addEventListener('click', minusFive);

function randomer() {
  random = Math.floor(Math.random() * 100) + 1;
  target.innerText = random;
}

function isEqual() {
  if (total === random) {
    result.style.color = 'red';
  }
}

function reset() {
  total = 0;
  result.innerText = total;
}
function plusTwo() {
  total += 2;
  result.innerText = total;
  isEqual();
}
function plusSeven() {
  total += 7;
  result.innerText = total;
  isEqual();
}
function minusFive() {
  total -= 5;
  result.innerText = total;
  isEqual();
}
