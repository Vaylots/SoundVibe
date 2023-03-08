const timerRange = document.querySelector("#timer-range");
const timerTime = document.querySelector(".timer-time");
const timerButton = document.querySelector(".timer-button");
let tempTime = 0;
let timerState = false;
let timerId;
timerRange.addEventListener("input", function (event) {
  timerTime.textContent = `${event.target.value}:00`;
  tempTime = 0;
});

function offSounds() {
  cafeAudio.pause();
  divs[2].style.backgroundColor = "red";
  cafeStatus = false;
  thunderAudio.pause();
  divs[0].style.backgroundColor = "red";
  thunderStatus = false;
  rainAudio.pause();
  divs[1].style.backgroundColor = "red";
  rainStatus = false;
  lofiAudio.pause();
  divs[3].style.backgroundColor = "red";
  lofiStatus = false;
}

timerButton.addEventListener("click", function () {
  if (!timerState) {
    if (!tempTime) {
      let counter = timerRange.value * 60;
      function Counter() {
        counter = counter - 1;
        let minutes = Math.floor(counter / 60);
        let seconds = counter % 60;
        timerTime.textContent = `${minutes}:${seconds}`;
        tempTime = counter;
        if (counter == 0) {
          timerState = false;
          offSounds();
          clearInterval(timerId);
          timerButton.textContent = "Старт";
        }
      }
    } else {
      function Counter() {
        tempTime = tempTime - 1;
        let minutes = Math.floor(tempTime / 60);
        let seconds = tempTime % 60;
        timerTime.textContent = `${minutes}:${seconds}`;
        if (tempTime == 0) {
          timerState = false;
          offSounds();
          clearInterval(timerId);
          timerButton.textContent = "Старт";
        }
      }
    }
    timerState = true;
    timerButton.textContent = "Стоп";
    timerId = setInterval(Counter, 1000);
  } else {
    offSounds();
    timerState = false;
    timerButton.textContent = "Старт";
    clearInterval(timerId);
  }
});
