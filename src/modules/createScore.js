import { puzzleOverlay, scoreOverlay, close } from './createPage';
import { sizesWrapper, btns, scoresArea } from './createPage';
import { time, startTimer, stopTimer } from './timer';
import { moves } from './replacePosition';

btns[4].addEventListener('click', showScore);
close.addEventListener('click', hiddenScore);


export function hiddenScore() {
  setTimeout(() => {
    scoreOverlay.classList.add('none');
    close.classList.add('none');
    scoresArea.classList.add('none');
  }, 50);
  if(puzzleOverlay.classList.contains('none')) {
    startTimer();
  }
}

export function hiddenScoreStart() {
  setTimeout(() => {
    scoreOverlay.classList.add('none');
    close.classList.add('none');
    scoresArea.classList.add('none');
  }, 50);
};

function showScore() {
  setTimeout(() => {
    scoreOverlay.classList.remove('none');
    close.classList.remove('none');
    scoresArea.classList.remove('none');
    stopTimer();
  }, 50);
}

export function createScore() {
  let pos = isTopMoves();
  if (pos) {
    let newPos = document.querySelectorAll('.position')[pos].cloneNode(true);
    newPos.querySelector('.position__moves').innerText = moves;
    newPos.querySelector('.position__time').innerText = time ?? '00:00';
    let size = sizesWrapper.querySelector('.active').innerText;
    newPos.querySelector('.position__size').innerText = `${size}`;

    let oldpos;
    for (let i = pos; i < document.querySelectorAll('.position').length; i++) {
      oldpos = document.querySelectorAll('.position')[i].cloneNode(true);
      oldpos.querySelector('.position__num').innerText = `${i + 1}`;
      document.querySelectorAll('.position')[i].replaceWith(newPos);
      newPos = oldpos;
    }
    if (document.querySelectorAll('.position').length > 11) {
      document.querySelectorAll('.position')[11].remove();
    }
  }
}

export function isTopMoves() {
  let topMovesArr = document.querySelectorAll('.position__moves');
  for (let i = 1; i < topMovesArr.length; i++) {
    if (moves < +topMovesArr[i].innerText || topMovesArr[i].innerText === '') {
      return i;
    }
  }
}

window.addEventListener('beforeunload', () => {
  localStorage.setItem(
    'score',
    document.querySelector('.puzzle__scores').innerHTML
  );
});

window.addEventListener('load', () => {
  if (localStorage.getItem('score')) {
    document.querySelector('.puzzle__scores').innerHTML =
      localStorage.getItem('score');
  }
});
