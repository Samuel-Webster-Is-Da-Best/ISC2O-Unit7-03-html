document.getElementById('button').addEventListener('click', determineAge)

function determineAge () {
  const age = document.getElementById('inp').value
  if (age >= 17) {
    alert('You are ready for r rated movies alone!')
  } else if (age >= 13) {
    alert('You are ready for pg-13 rated movies alone!')
  } else {
    alert('you are ready for g and pg movies alone!')
  }
  document.getElementById('inp').value = ''
}
