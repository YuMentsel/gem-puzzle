import { emptyTile, tiles, tilesCount } from './setPosition';
import { replacePossition, emptyCell } from './replacePosition';
import { puzzle } from './createPage';

export let selectedTile;

puzzle.addEventListener('dragover', (e) => {
  e.dataTransfer.dropEffect = 'move';
  e.preventDefault();
});

puzzle.addEventListener('dragstart', (e) => {
  selectedTile = e.target.closest('.tile');
  setTimeout(() => {
    selectedTile.classList.add('hidden');
  }, 0);
});


document.addEventListener('dragend', () => {
  selectedTile.classList.remove('hidden');
});

document.addEventListener('drop', (e) => {
  if (e.target.closest('.tile') == emptyTile){
    replacePossition(selectedTile);
    selectedTile.classList.remove('hidden');
  }
});


