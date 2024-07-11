//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

const button = document.querySelector('#check');
let display = document.querySelector('#placeToSee');

button.addEventListener('click', checkDay);

function checkDay() {
  let day = document.querySelector('#day').value.toLowerCase();
  if (day === 'tuesday' || day === 'thursday') {
    display.innerText = 'CLASS DAY';
  } else if (day === 'saturday' || day === 'sunday') {
    display.innerText = 'WEEKEND';
  } else if (day === 'wednesday') {
    display.innerText = 'GET OVER THE HUMP';
  } else {
    display.innerText = 'BORING!!!!';
  }
}

//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DONE!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
