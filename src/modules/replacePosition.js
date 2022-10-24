import { matrix, tiles, tilesNum, tilesCount, setPositionTiles } from './setPosition';
import { movesInfo, puzzle, puzzleOverlay, startMessage, won } from './createPage';
import { time, stopTimer } from './timer';
import { audio } from './audio';

export let moves = 0;

puzzle.addEventListener('click', (e) => {
  if (!e.target.matches('.tile, .tile *')) return;
  let tile = e.target.closest('.tile');
  tile.style.transition = '0.2s';
  replacePossition(tile);
  setTimeout(() => tile.style.transition = '0s', 100);
});

export function replacePossition(tile) {
  const selectedTile = +tile.id;
  const selectedCell = findCell(selectedTile, matrix);
  const emptyCell = findCell(tilesCount, matrix);
  if (canReplace(emptyCell, selectedCell)) {
    replacePosition(emptyCell, selectedCell, matrix);
    setPositionTiles(matrix);
    moves++;
    updateMoves();
    audio.play();
    if(isWon()) {
      showWonMessage();
    }
    tile.classList.add('active');
    setTimeout(() => tile.classList.remove('active'), 400);
  }
}

export function findCell(tile, matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === tile) return { col, row };
    }
  }
}

export function canReplace(cell1, cell2) {
  return (
    (Math.abs(cell1.col - cell2.col) === 1 ||
      Math.abs(cell1.row - cell2.row) === 1) &&
    (cell1.col === cell2.col || cell1.row === cell2.row)
  );
}

export function replacePosition (cell1, cell2, matrix) {
  const temt = matrix[cell1.row][cell1.col];
  matrix[cell1.row][cell1.col] = matrix[cell2.row][cell2.col];
  matrix[cell2.row][cell2.col] = temt;
}

export function resetMoves() {
  moves = 0;
  movesInfo.innerHTML = `Moves: ${moves}`
}

function updateMoves() {
  movesInfo.innerHTML = `Moves: ${moves}`
}

export function loadMoves(value) {
  moves = value;
  movesInfo.textContent = `Moves: ${moves}`
}

export function isWon() {
  const matrixFlat = matrix.flat();
  return JSON.stringify(matrixFlat) === JSON.stringify(tilesNum);
}

function showWonMessage() {
  setTimeout(() => {
    puzzleOverlay.classList.remove('none');
    let s;
    moves % 10 == 1 ? s = 'move' : s = 'moves'
    won.innerHTML = `
    Hooray! You solved the puzzle in&nbsp;${time} and ${moves}&nbsp;${s}! <br>
    <span>Press Start or Cheat & play again.</span>`;
    won.classList.remove('none');
    stopTimer();
  }, 200);
}

export function removeStartMessage() {
  setTimeout(() => {
    puzzleOverlay.classList.add('none');
    startMessage.textContent = `
    Press Start to play!`;
    startMessage.classList.add('none');
  }, 200);
}

export function showStartMessage() {
  setTimeout(() => {
    puzzleOverlay.classList.remove('none');
    startMessage.textContent = `
    Press Start to play!`;
    startMessage.classList.remove('none');
  }, 200);
}

showStartMessage();
