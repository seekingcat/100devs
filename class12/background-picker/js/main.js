const body = document.querySelector('body')
document.querySelector('#purple').onclick = partyPurple
document.querySelector('#green').onclick = partyGreen
document.querySelector('#blue').onclick = partyBlue
document.querySelector('#orange').onclick = partyOrange


function partyPurple() {
  body.style.backgroundColor = 'rgba(241,63,247,1)'
  body.style.color = white
}
function partyGreen() {
  body.style.backgroundColor = 'rgba(0,253,81,1)'
  body.style.color = white
}
function partyBlue() {
  body.style.backgroundColor = 'rgba(0,254,255)'
  body.style.color = white
}
function partyOrange() {
  body.style.backgroundColor = 'rgba(255, 121, 0)'
  body.style.color = white
}