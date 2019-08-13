// Event Listeners

document.addEventListener('click', (event) => {
  if (event.target.matches('.box')) {
    if (!gameOver()) {
      toggle.call(event);
    }
  }

});
