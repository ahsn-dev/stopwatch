let timer = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let time = 0;
let isRunning = false;
let interval;

function startTimer() {
  isRunning = true;
  interval = setInterval(() => {
    if (isRunning) {
      time++;
      let minutes = Math.floor(time / 100 / 60);
      let second = Math.floor((time / 100) % 60);
      let miliseconds = time % 100;
      timer.innerHTML = `${minutes < 10 ? "0" + minutes : minutes} : ${
        second < 10 ? "0" + second : second
      } : ${miliseconds}`;
    }
  }, 10);
  return interval;
}

function stopTimer() {
  isRunning = false;
  clearInterval(interval);
}

function resetTimer() {
  isRunning = false;
  time = 0;
  timer.innerHTML = "00:00:00";
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
