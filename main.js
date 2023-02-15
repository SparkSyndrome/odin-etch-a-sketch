makeGrid(16);

function makeGrid(gridSize) {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  let numDivs = (gridSize * gridSize);
  for (let i = 0; i < numDivs; i++) {
    let gridCell = document.createElement('div');
    gridContainer.appendChild(gridCell).className = 'grid-cell';
    gridCell.addEventListener('mouseover', (e) => e.target.classList.add('active'));
  }
}

const selectGridSizeBtn = document.getElementById('select');

function getNewGridSize() {
  let userInput = prompt("Enter your desired grid size (up to 100): ");
  if (userInput > 0 && userInput <= 100) {
    makeGrid(userInput);
  } else {
    getNewGridSize();
  }
}

selectGridSizeBtn.addEventListener('click', getNewGridSize);
