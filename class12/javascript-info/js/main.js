document.querySelector('#checkMin').addEventListener('click', checkMin);

function checkMin(e) {
  e.preventDefault();
  const firstNum = Number(document.querySelector('#firstNum').value);
  const secondNum = Number(document.querySelector('#secondNum').value);
  const result = firstNum < secondNum ? firstNum : secondNum;
  document.querySelector('#minNumber').innerText = result;
}

// document.querySelector('#toThePower').addEventListener('click', checkMin);

// function checkMin(e) {
//   e.preventDefault();
//   const baseNum = Number(document.querySelector('#baseNum').value);
//   const exponent = Number(document.querySelector('#exponent').value);
//   const raised = baseNum ** exponent;
//   document.querySelector('#power').innerText = raised;
// }

// for (let i = 1; i < 8; i++) {
//     console.log('#' + '\n')
// }
