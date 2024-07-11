const gifHolder = document.querySelector('#gifHolder');
document.querySelector('#wicked').onclick = partyPurple;
document.querySelector('#meangirls').onclick = partyGreen;
document.querySelector('#matilda').onclick = partyBlue;
document.querySelector('#hadestown').onclick = partyOrange;

function partyPurple() {
  document.querySelector('#musicalTitle').innerText = 'You are Wicked';
  gifHolder.innerHTML =
    '<iframe src="https://giphy.com/embed/458lzXzm7W5Jni2eS4" width="480" height="269" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
  setTimeout(() => {
    gifHolder.innerHTML = '';
  }, 3000);
}
function partyGreen() {
  document.querySelector('#musicalTitle').innerText = 'You are & Juliet';
  gifHolder.innerHTML =
    '<iframe src="https://giphy.com/embed/56R8j5S4E50nURzXWt" width="480" height="271" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
  setTimeout(() => {
    gifHolder.innerHTML = '';
  }, 3000);
}
function partyBlue() {
  document.querySelector('#musicalTitle').innerText = 'You are Matilda';
  gifHolder.innerHTML =
    '<iframe src="https://giphy.com/embed/l3V0nYlMRr6jaXXvG" width="480" height="326" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
  setTimeout(() => {
    gifHolder.innerHTML = '';
  }, 3000);
}
function partyOrange() {
  document.querySelector('#musicalTitle').innerText = 'You are Hadestown';
  gifHolder.innerHTML =
    '<iframe src="https://giphy.com/embed/cP64C93nfLGTSPjNK1" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
  setTimeout(() => {
    gifHolder.innerHTML = '';
  }, 3000);
}
