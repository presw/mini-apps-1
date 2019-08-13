// Event Listener

document.addEventListener('click', (event) => {
  // Clicking a tic tac toe field
  if (event.target.matches('.box')) {
    if (!gameOver()) {
      toggle.call(event);
    }
  }
  // Clicking the reset button
  if (event.target.matches('#reset')) {
    reset();
  }
});
