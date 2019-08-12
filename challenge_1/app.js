const gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

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

// Updates board placement for calculating wins
const updateGameBoard = (coord, player) => {
  let value = 0;
  if (player === 'O') {
    value = 1;
  } else {
    value = 2;
  }
  gameBoard[coord[0]][coord[1]] = value;
}
