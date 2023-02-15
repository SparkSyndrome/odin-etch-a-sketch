let color = 'black';
let penDown = false;

document.addEventListener('DOMContentLoaded', function() {
  makeGrid(16);

  document.querySelector('body').addEventListener('click', function(e) {
    if (e.target.tagName != 'BUTTON') {
      penDown = !penDown;
      let message = document.querySelector('.message');
      if (penDown) {
        message.innerHTML = "Click anywhere on the page to stop drawing.";
      } else {
        message.innerHTML = "Click anywhere on the page to start drawing.";
      }
    }
  });

  let newGridSizeBtn = document.getElementById('select');
  newGridSizeBtn.addEventListener("click", function() {
    getNewGridSize();
  })
  console.log("Hi");
});


function makeGrid(gridSize) {
  const gridContainer = document.querySelector('.grid-container');
  
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  
  let numDivs = (gridSize * gridSize);
  for (let i = 0; i < numDivs; i++) {
    let gridCell = document.createElement('div');
    gridCell.addEventListener('mouseover', colorDiv);
    gridContainer.appendChild(gridCell).className = 'grid-cell';
  }
}


function getNewGridSize() {
  let userInput = prompt("Enter your desired grid size (up to 100)");
  if (userInput > 0 && userInput <= 100) {
    reset();
    makeGrid(userInput);
  } else if (userInput === null) {
    return;
  } else {
    getNewGridSize();
  }
}

function colorDiv() {
  if (penDown) {
    if (color == 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = 'black';
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function reset() {
  let cells = document.querySelectorAll('div');
  cells.forEach((cell) => cell.style.backgroundColor = 'white');
}