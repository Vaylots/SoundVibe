let divs = document.querySelectorAll(".status-circle");

let cafeStatus = false;
let cafeAudio = new Audio();
let cafeVolume = document.querySelector("#cafe-volume");
let cafeButton = document.querySelector("#cafe");

cafeVolume.addEventListener("input", function () {
  cafeAudio.volume = cafeVolume.value / 100;
});

cafeButton.addEventListener("click", function () {
  if (!cafeStatus) {
    cafeAudio.src = "./sounds/cafe.mp3";
    cafeAudio.loop = true;
    cafeAudio.play();
    cafeStatus = true;
    divs[2].style.backgroundColor = "green";
  } else {
    cafeAudio.pause();
    cafeStatus = false;
    divs[2].style.backgroundColor = "red";
  }
});

let thunderStatus = false;
let thunderAudio = new Audio();
let thunderVolume = document.querySelector("#thunder-volume");
let thunderButton = document.querySelector("#thunder");

thunderVolume.addEventListener("input", function () {
  thunderAudio.volume = thunderVolume.value / 100;
});

thunderButton.addEventListener("click", function () {
  if (!thunderStatus) {
    thunderAudio.src = "./sounds/thunder.mp3";
    thunderAudio.loop = true;
    thunderAudio.play();
    thunderStatus = true;
    divs[0].style.backgroundColor = "green";
  } else {
    thunderAudio.pause();
    thunderStatus = false;
    divs[0].style.backgroundColor = "red";
  }
});

let rainStatus = false;
let rainAudio = new Audio();
let rainVolume = document.querySelector("#rain-volume");
let rainButton = document.querySelector("#rain");

rainVolume.addEventListener("input", function () {
  rainAudio.volume = rainVolume.value / 100;
});

rainButton.addEventListener("click", function () {
  if (!rainStatus) {
    rainAudio.src = "./sounds/rain.mp3";
    rainAudio.loop = true;
    rainAudio.play();
    rainStatus = true;
    divs[1].style.backgroundColor = "green";
  } else {
    rainAudio.pause();
    rainStatus = false;
    divs[1].style.backgroundColor = "red";
  }
});

let lofiStatus = false;
let lofiAudio = new Audio();
let lofiVolume = document.querySelector("#lofi-volume");
let lofiButton = document.querySelector("#lofi");
let musicArray = ["lofi-1.mp3", "lofi-2.mp3", "lofi-3.mp3", "lofi-4.mp3"];

function randomMusic(array) {
  return `./music/${array[Math.floor(Math.random() * musicArray.length)]}`;
}

lofiVolume.addEventListener("input", function () {
  lofiAudio.volume = lofiVolume.value / 100;
});

lofiButton.addEventListener("click", function () {
  if (!lofiStatus) {
    lofiAudio.src = randomMusic(musicArray);
    lofiAudio.loop = true;
    lofiAudio.play();
    lofiStatus = true;
    divs[3].style.backgroundColor = "green";
  } else {
    lofiAudio.pause();
    lofiStatus = false;
    divs[3].style.backgroundColor = "red";
  }
});
