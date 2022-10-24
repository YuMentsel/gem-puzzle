import { btns, shufflePuzzle } from './shuffle';
import { puzzleOverlay, startMessage, won } from './createPage';
import { matrix, loadMatrix, setPositionTiles } from './setPosition';
import {
  moves,
  loadMoves,
  isWon,
  showStartMessage,
  removeStartMessage,
} from './replacePosition';
import { timeCounter, loadTime } from './timer';

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
    let saveStr = JSON.stringify(saveObj);
    localStorage.setItem('saveGameLS', saveStr);
  }
}

function loadGame() {
  localStorage.getItem('saveGameLS');
  if (!(localStorage.saveGameLS)) {
    startMessage.textContent = `
      No saved games!`;
  } else {
    removeStartMessage();
    let loadObj = JSON.parse(localStorage.saveGameLS);
    loadMatrix(loadObj.saveMatrix);
    loadMoves(loadObj.saveMoves);
    loadTime(loadObj.saveTime);
    setPositionTiles(matrix);
    setTimeout(function () {
      puzzleOverlay.classList.add('none');
      won.classList.add('none');
    }, 200);
  }
}
