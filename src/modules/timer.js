import { timer } from './createPage';

export let timeCounter = 0;
export let time;
let timerInterval;

export function startTimer() {
  // removeTimer();
  timerInterval = setInterval(function () {
    timeCounter += 1;
    getTime();
    if (timeCounter === 3600) {
      alert('Time is up! Game over!');
      location.reload();
    }
  }, 1000);
}

function getTime() {
  let second = Math.floor(timeCounter) - Math.floor(timeCounter / 60) * 60;
  let minute = Math.floor(timeCounter / 60);
  time = `${minute < 10 ? '0' + minute.toString() : minute}:${
    second < 10 ? '0' + second.toString() : second
  }`;
  timer.innerHTML = `Time: ${time}`;
}

export function removeTimer() {
  clearInterval(timerInterval);
  timeCounter = 0;
}

export function stopTimer() {
  clearInterval(timerInterval);
}

export function loadTime(value) {
  timeCounter = value;
  stopTimer();
  getTime();
  startTimer();
}
