let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

console.log(hours + " : " + minutes + " : " + seconds);

let now = "";
const clock = document.querySelector(".js-clock");
function getTime() {
  today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();
  seconds = today.getSeconds();

  now = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
  clock.innerHTML = `<div>${now}</div>`;
}

setInterval(getTime, 1000);
