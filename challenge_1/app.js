const togglePiece = () => {
  let player = 'O';
  return () => {
    if (player === 'X') {
      player = 'O';
    } else {
      player = 'X';
    }
    event.target.innerText = player;
  }
};

// Toggles a location between 'X' and 'O'
const toggle = togglePiece();
