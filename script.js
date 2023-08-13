const rectangle = document.querySelector('.rectangle');
let x = 50; // Initial position
let y = 50; // Initial position
const step = 10; // Number of pixels to move on each arrow key press

// Function to move the rectangle
const moveRectangle = (direction) => {
  switch (direction) {
    case 'ArrowUp':
      y -= step;
      break;
    case 'ArrowDown':
      y += step;
      break;
    case 'ArrowLeft':
      x -= step;
      break;
    case 'ArrowRight':
      x += step;
      break;
    default:
      break;
  }
  rectangle.style.top = y + 'px';
  rectangle.style.left = x + 'px';
};

// Event listener for arrow key press
document.addEventListener('keydown', (event) => {
  moveRectangle(event.key);
});
