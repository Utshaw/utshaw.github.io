const ball = document.getElementById('ball');
const gridContainer = document.querySelector('.grid-container');
const gridSize = gridContainer.offsetWidth / 3; // Dynamically calculate cell size

// Track ball position (start at bottom-left, grid indexed from 0 to 2)
let position = { row: 2, col: 0 };

// Update ball position
function updateBallPosition() {
  const x = position.col * gridSize; // Horizontal movement
  const y = position.row * gridSize; // Vertical movement
  ball.style.transform = `translate(${x + 5}px, ${y + 5}px)`; // Move ball with slight alignment adjustment
}

// Move ball based on direction
function moveBall(direction) {
  const newPosition = { ...position };

  switch (direction) {
    case 'up':
      if (newPosition.row > 0) newPosition.row -= 1;
      break;
    case 'down':
      if (newPosition.row < 2) newPosition.row += 1;
      break;
    case 'left':
      if (newPosition.col > 0) newPosition.col -= 1;
      break;
    case 'right':
      if (newPosition.col < 2) newPosition.col += 1;
      break;
  }

  // Update position if valid
  if (newPosition.row !== position.row || newPosition.col !== position.col) {
    position = newPosition;
    updateBallPosition();
  }
}

// Attach event listeners to controls
document.getElementById('up').addEventListener('click', () => moveBall('up'));
document.getElementById('down').addEventListener('click', () => moveBall('down'));
document.getElementById('left').addEventListener('click', () => moveBall('left'));
document.getElementById('right').addEventListener('click', () => moveBall('right'));

// Update gridSize on window resize
window.addEventListener('resize', () => {
  const newGridSize = gridContainer.offsetWidth / 3;
  if (gridSize !== newGridSize) {
    updateBallPosition(); // Recalculate ball position
  }
});

// Initial position
updateBallPosition();