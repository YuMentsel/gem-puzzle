import sound from '../assets/audio/audio.mp3'
export let audio = new Audio(sound);
let isMute = false;

const soundBtb = document.querySelector('.sound');

function toggleSound() {
  if (!isMute) {
    audio.volume = 0;
    isMute = true;
    soundBtb.classList.toggle('off');
  } else {
    audio.volume = 1;
    isMute = false;
    soundBtb.classList.toggle('off');
  }
}

soundBtb.addEventListener('click', toggleSound);