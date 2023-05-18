const slider = document.querySelector('[data-carousel]')
const slides = [...document.querySelectorAll('.Wallop-item')]
this.wallop = new Wallop(slider)

let prev = 0
const buttonNext = document.querySelector('.Wallop-buttonNext')

function AutoSlide() {
  buttonNext.click()
}

setInterval(AutoSlide, 5000)