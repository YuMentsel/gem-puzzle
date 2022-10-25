import { puzzle, sizesWrapper, timer } from './createPage';
import { showStartMessage } from './replacePosition';
import { removeTimer } from './timer';

export let tilesCount = 16;

export function createTiles(tilesCount) {
  for (let i = 1; i <= tilesCount; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.id = i;
    tile.innerHTML =
    `<div class="tile__num">${i}</div>`;
    if (!(i == tilesCount)) {
      tile.draggable = 'true';
    }
    puzzle.append(tile);
  }
}

createTiles(tilesCount);

export let tiles = [...puzzle.querySelectorAll('.tile')];
export let tilesNum = tiles.map((el) => +(el.id));
export let emptyTile = tiles[tilesCount - 1];

tiles[tilesCount - 1].classList.add('hidden');

function getTiles() {
  tiles = [...puzzle.querySelectorAll('.tile')];
  tilesNum = tiles.map((el) => +(el.id));
  emptyTile = tiles[tilesCount - 1];
  tiles[tilesCount - 1].classList.add('hidden');
}

const toMatrix = (arr, w) =>
  arr.reduce((rows, key, i) => (i % w == 0
    ? rows.push([key])
    : rows[rows.length - 1].push(key)) && rows, []);

export let matrix = toMatrix(tilesNum, Math.sqrt(tilesCount));

export function returnMatrix() {
  matrix = toMatrix(tilesNum, Math.sqrt(tilesCount));
}
export function loadMatrix(value) {
  matrix = value;
}

export function setPositionTiles(matrix) {
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix.length; col++) {
      const el = matrix[row][col];
      const tile = tiles[el - 1];
      setTranstorm(tile, col, row);
    }
  }
}

function setTranstorm(tile, col, row) {
  const step = 102;
  tile.style.transform = `translate(${col * step}%, ${row * step}%)`
}

setPositionTiles(matrix);

// Размер поля

export const sizes = sizesWrapper.querySelectorAll('.size');

sizes[0].addEventListener('click', () => changeSize (9, 100 / 3 - 0.5, 3.5));
sizes[1].addEventListener('click', () => changeSize (16, 100 / 4 - 0.4, 2.5));
sizes[2].addEventListener('click', () => changeSize (25, 100 / 5 - 0.3, 1.85));
sizes[3].addEventListener('click', () => changeSize (36, 100 / 6 - 0.3, 1.5));
sizes[4].addEventListener('click', () => changeSize (49, 100 / 7 - 0.3, 1.25));
sizes[5].addEventListener('click', () => changeSize (64, 100 / 8 - 0.25, 1));

sizesWrapper.addEventListener('click', changeActive);

function changeActive(e) {
  showStartMessage();
  removeTimer();
  timer.innerHTML = `Time: 00:00`;
  sizes.forEach((size) => {
    size.classList.remove('active');
  })
  e.target.classList.add('active');
}

export function changeSize(count, width, font ) {
  tiles.forEach((item) => {
    item.remove();
  })
  tilesCount = count;
  createTiles(tilesCount);
  getTiles();
  returnMatrix();
  tiles.forEach((item) => {
    item.style.width = `${width}%`;
    item.style.height = `${width}%`;
    item.style.fontSize = `${font}rem`;
  })
  setPositionTiles(matrix);
}
