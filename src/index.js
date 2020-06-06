import './styles/main.scss';
import Color from 'color';
// ---
const color = document.querySelector('#color');
const square = document.querySelector('#square')
// const gradient = document.querySelector('.gradient')
const gradients = [...document.querySelectorAll('.gradient')]

const applyColor = (gradient, color, degree) => {
  gradient.style.backgroundColor = color.rotate(degree).hsl().string()
}

color.addEventListener('change', event => {
  const color = Color(event.target.value)
  square.style.backgroundColor = event.target.value;
  // gradient.style.backgroundColor = color.rotate(40).hsl().string()

  gradients.forEach((gradient, index) => {

    applyColor(gradient, color, (index + 1) * 40)
  })
})


// square.addEventListener('click', e => {
//   console.log(e.target)
// })
