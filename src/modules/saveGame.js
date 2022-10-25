import { sizesWrapper, puzzleOverlay, startMessage, won, btns } from './createPage';
import { matrix, loadMatrix, setPositionTiles, changeSize, sizes } from './setPosition';
import {moves, loadMoves, isWon, showStartMessage, removeStartMessage } from './replacePosition';
import { timeCounter, loadTime } from './timer';
import { hiddenScoreStart } from './createScore';

btns[2].addEventListener('click', saveGame);
btns[3].addEventListener('click', loadGame);

export let saveObj = {};

function saveGame() {
  if (isWon()) {
    showStartMessage();
  } else {
    saveObj['saveMatrix'] = matrix;
    saveObj['saveTime'] = timeCounter;
    saveObj['saveMoves'] = moves;
    let size = sizesWrapper.querySelector('.active').innerText;
    saveObj['saveSize'] = +size.slice(2);
    let saveStr = JSON.stringify(saveObj);
    localStorage.setItem('saveGameLS', saveStr);
  }
}

export const  changeSizeTranslate = [0, 0, 0, 0.5, 0.4, 0.3, 0.3, 0.3, 0.25];
export const  changeSizeFont = [0, 0, 0, 3.5, 2.5, 1.85, 1.5, 1.25, 1];

function loadGame() {
  hiddenScoreStart();
  localStorage.getItem('saveGameLS');
  if (!(localStorage.saveGameLS)) {
    startMessage.textContent = `
      No saved games!`;
  } else {
    removeStartMessage();
    let loadObj = JSON.parse(localStorage.saveGameLS);
    changeSize (loadObj.saveSize ** 2,
      100 / loadObj.saveSize - changeSizeTranslate[loadObj.saveSize],
      changeSizeFont[loadObj.saveSize]);
    sizes.forEach((size) => {
      size.classList.remove('active');
    })
    sizes[loadObj.saveSize - 3].classList.add('active');
    loadMatrix(loadObj.saveMatrix);
    loadMoves(loadObj.saveMoves);
    loadTime(loadObj.saveTime);
    setPositionTiles(matrix);
    setTimeout(function () {
      puzzleOverlay.classList.add('none');
      won.classList.add('none');
    }, 50);
  }
}
