const darkWhite = document.querySelectorAll('.dark-white');
const darkDesaturatedBlue = document.querySelectorAll('.dark-DarkDesaturatedBlue');
const darkDarkDesaturatedBlue = document.querySelectorAll('.dark-DarkDesaturatedBlue');
const darkVeryDarkBlueTop = document.querySelectorAll('.dark-VeryDarkBlueTop');
const darkVeryDarkBlue = document.querySelectorAll('.dark-VeryDarkBlue');

const darkModeToggle = document.querySelector('.slider')


darkModeToggle.addEventListener('click', () => {
  toggleDarkMode()
})


function toggleDarkMode() {
  darkWhite.forEach(e => {
    e.classList.toggle('color-white')
  })
  darkDesaturatedBlue.forEach(e => {
    e.classList.toggle('color-DesaturatedBlue')
  })
  darkDarkDesaturatedBlue.forEach(e => {
    e.classList.toggle('background-DarkDesaturatedBlue')
  })
  darkVeryDarkBlueTop.forEach(e => {
    e.classList.toggle('background-VeryDarkBlueTop')
  })
  darkVeryDarkBlue.forEach(e => {
    e.classList.toggle('background-VeryDarkBlue')
  })

}