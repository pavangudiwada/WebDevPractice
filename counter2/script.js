let hours = document.querySelector(".hours-text")
let minutes = document.querySelector(".minutes-text")
let seconds = document.querySelector(".seconds-text")

function changetime() {
  let time = new Date()
  hours.innerText = time.getHours()
  minutes.innerText = time.getMinutes()
  seconds.innerText = time.getSeconds()
}

setInterval(changetime, 1000)
