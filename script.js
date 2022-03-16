// Initial Elements
const root = document.querySelector(":root")
const viewer = document.querySelector(".background-viewer")
const changer = document.querySelector(".background-changer")

// Scripts
changeBg() // bg color initilize
viewer.addEventListener("click", changeBg)
changer.addEventListener("click", changeBg)

// Functions
function changeBg() {
  const randomColor = 
    `${random(360)} ${random(undefined, 50)}% ${random(undefined, 50)}%`
  return root.style.setProperty("--clr-primary-400", randomColor) 
}
function random(max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min))
}
