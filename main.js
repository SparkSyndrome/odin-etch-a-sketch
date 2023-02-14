const gridContainer = document.getElementById('grid-container');
let gridCell;
let oldGridLength;

function makeGrid(rows, cols) {
  oldGridLength = (rows * cols);
  console.log(oldGridLength);
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    gridCell = document.createElement('div');
    gridContainer.appendChild(gridCell).className = 'grid-cell';
    gridCell.addEventListener('mouseover', (e) => e.target.classList.add('active'));
  }
}

makeGrid(16, 16);