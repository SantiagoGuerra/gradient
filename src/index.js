import './styles/main.scss';
import Color from 'color';
// ---
const color = document.querySelector('#color');
// const circle = document.querySelector('#circle')
// const spot = document.querySelector('.spot')

const squares = [...document.querySelectorAll('.square')]
const gradients = [...document.querySelectorAll('.gradient')]
const matchings = [...document.querySelectorAll('.matching')]
const palettes = [...document.querySelectorAll('.palette')]

const applyColor = (gradient, color, degree) => {
  gradient.style.backgroundColor = color.rotate(degree).hsl().string()
}

color.addEventListener('change', event => {
  const color = Color(event.target.value)

  squares.forEach(square => { 
    square.style.backgroundColor = event.target.value;
  })
  // circle.style.backgroundColor = event.target.value;
  // spot.style.backgroundColor = event.target.value

  gradients.forEach((gradient, index) => {

    applyColor(gradient, color, (index + 1) * 76)
  })

  matchings.forEach((matching, index) => {
    applyColor(matching, color, (index + 1) * 87)
  })

  palettes.forEach((spot, index) => {
    applyColor(spot, color, (index + 1) * 63)
  })
})


// Matching Gradient //

