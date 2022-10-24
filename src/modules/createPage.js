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

game.append(title, btnWrapper, info, puzzle, sizesWrapper);
puzzle.append(puzzleOverlay, startMessage, won);