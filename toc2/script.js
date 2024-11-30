const grid = document.getElementById('grid');
let position = { row: 2, col: 0 };

// Initialize the grid
for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  grid.appendChild(cell);
}

// Create the circle
const circle = document.createElement('div');
circle.className = 'circle';
grid.appendChild(circle);

// Position the circle
function updateCircle() {
  const top = position.row * 102;
  const left = position.col * 102;
  circle.style.transform = `translate(${left}px, ${top}px)`;
}

updateCircle();

// Move the circle
function move(direction) {
  switch (direction) {
    case 'up':
      if (position.row > 0) position.row--;
      break;
    case 'down':
      if (position.row < 2) position.row++;
      break;
    case 'left':
      if (position.col > 0) position.col--;
      break;
    case 'right':
      if (position.col < 2) position.col++;
      break;
  }
  updateCircle();
}