let displaytime = document.querySelector(".timer")
const currentdatetime = new Date()

function currentTime() {
  let currenttime = new Date()
  let time =
    currenttime.getHours() +
    ":" +
    currenttime.getMinutes() +
    ":" +
    currenttime.getSeconds()
  console.log(time)
  displaytime.innerText = time
}

setInterval(currentTime, 1000)
