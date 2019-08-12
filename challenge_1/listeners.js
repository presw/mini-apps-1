// Event Listeners

document.addEventListener('click', (event) => {
  if (event.target.matches('.box')) {
    toggle.call(event);
    let coord = JSON.parse(event.target.id);
    updateGameBoard(coord);
    checkRow(coord);
    checkCol(coord);
    checkMajorDiag(coord);
  }

});
