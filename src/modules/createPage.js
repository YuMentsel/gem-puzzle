const game = document.createElement('div');
  game.className = 'game';

  const title = document.createElement('h1');
  title.textContent = `Gem Puzzle`;

document.body.append(game);

export const btnWrapper = document.createElement('div');
  btnWrapper.className = 'btn-wrapper';
  btnWrapper.innerHTML = `
    <button id="0" class="btn">Start</button>
    <button id="1" class="btn">Сheat</button>
    <button class="btn">Save</button>
    <button class="btn">Load</button>
    <button class="btn">Results</button>
    <button class="btn sound"></button>`;

export const info = document.createElement('div');
  info.className = 'info';

export const movesInfo = document.createElement('div');
  movesInfo.className = 'moves';
  movesInfo.textContent = `Moves: 0`

export const timer = document.createElement('div');
  timer.className = 'timer';
  timer.textContent = `Time: 00:00`

  info.append(movesInfo, timer);

export const puzzle = document.createElement('div');
  puzzle.className = 'puzzle';

export const puzzleOverlay = document.createElement('div');
  puzzleOverlay.className = 'puzzle__overlay';

export const scoreOverlay = document.createElement('div');
  scoreOverlay.className = 'puzzle__overlay none';

export const won = document.createElement('div');
  won.className = 'puzzle__won none';

export const startMessage = document.createElement('div');
  startMessage.className = 'puzzle__startMessage none';

export const sizesWrapper = document.createElement('div');
  sizesWrapper.className = 'sizes';
  sizesWrapper.innerHTML = `Size:
    <span class="size">3x3</span>
    <span class="size active">4x4</span>
    <span class="size">5x5</span>
    <span class="size">6x6</span>
    <span class="size">7x7</span>
    <span class="size">8x8</span>`;

export const scoresArea = document.createElement('div');
  scoresArea.classList.add('puzzle__scores', 'none');

export const close = document.createElement('div');
  close.classList.add('close', 'none');
  close.innerHTML = `&times;`
  puzzle.prepend(close);

  for (let i = 0; i < 10; i++){
  const position = document.createElement('div');
  position.classList.add('position');

  const numTop = document.createElement('div');
  numTop.classList.add('position__num');
  numTop.textContent = `${i + 1}`
  position.append(numTop);

  const sizeTop = document.createElement('div');
  sizeTop.classList.add('position__size');
  position.append(sizeTop);

  const movesTop = document.createElement('div');
  movesTop.classList.add('position__moves');
  position.append(movesTop);

  const timeTop = document.createElement('div');
  timeTop.classList.add('position__time');
  position.append(timeTop);

  scoresArea.append(position);
}

const scoresTitle = document.createElement('div');
scoresTitle.classList.add('position', 'scores__title');
scoresArea.prepend(scoresTitle);

const numTop = document.createElement('div');
numTop.innerText = '#';
numTop.classList.add('position__num');

const sizeTop = document.createElement('div');
sizeTop.innerText = 'Size';
sizeTop.classList.add('position__size');

const movesTop = document.createElement('div');
movesTop.innerText = 'Moves';
movesTop.classList.add('position__moves');

const timeTop = document.createElement('div');
timeTop.innerText = 'Time';
timeTop.classList.add('position__time');

scoresTitle.append(numTop, sizeTop, movesTop, timeTop);

game.append(title, btnWrapper, info, puzzle, sizesWrapper);
puzzle.append(puzzleOverlay, scoreOverlay, startMessage, won, scoresArea);

export const btns = btnWrapper.querySelectorAll('.btn');