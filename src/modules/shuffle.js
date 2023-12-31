import { puzzleOverlay, timer, won, btns } from './createPage';
import { resetMoves, findCell, canReplace, replacePosition, removeStartMessage } from './replacePosition';
import { matrix, returnMatrix, tilesCount, setPositionTiles } from './setPosition';
import { startTimer, removeTimer } from './timer';
import { hiddenScoreStart } from './createScore'

btns[0].addEventListener('click', shufflePuzzle);
btns[1].addEventListener('click', shufflePuzzle);

export function shufflePuzzle(e) {
  hiddenScoreStart();
  removeStartMessage();
  returnMatrix();
  timer.innerHTML = `Time: 00:00`
  let movesCount = 200;
  if(e.target.id === '1') {
    movesCount = 1;
  }
  for (let i = 0; i < movesCount; i++) {
    randomReplace();
  }
  setTimeout(function () {
    puzzleOverlay.classList.add('none');
    won.classList.add('none');
  }, 50);
  resetMoves();
  removeTimer();
  startTimer();
}

let prevCell;

function randomReplace() {
  const emptyCell = findCell(tilesCount, matrix);
  const validCells = findValidCells(emptyCell, matrix);
  prevCell = emptyCell;
  const randomNum = random(validCells.length);
  const randomCell = validCells[randomNum];
  replacePosition(emptyCell, randomCell, matrix);
  setPositionTiles(matrix);
}

function findValidCells(emptyCell, matrix, prevCell) {
  const arr = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (canReplace({ col, row }, emptyCell)) {
        if (!prevCell || !(prevCell.col === col && prevCell.row === row))
        arr.push({ col, row });
      }
    }
  }
  return arr;
}

function random(max) {
  return Math.floor(Math.random() * max);
}