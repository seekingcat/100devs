document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here

  if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerText = 'Weekend'
  } else if (day === "thursday" || day === 'tuesday') {
    document.querySelector('#placeToSee').innerText = 'Class day'

  } else {
    document.querySelector('#placeToSee').innerText = 'BORING!!!!'

  }
}
