// Event Listeners

document.addEventListener('click', (event) => {
  if (event.target.matches('.box')) {
    toggle.call(event);
    let coord = JSON.parse(event.target.id);
    updateGameBoard(coord, event.target.innerText);
  }

});
