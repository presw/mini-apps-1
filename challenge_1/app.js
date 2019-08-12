const gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

const state = {
  player: 'O',
  coord: null,
}

const togglePiece = () => {
  return () => {
    let player = event.target.innerText;
    // player = state.player;
    if (player === 'X') {
      state.player = 'O';
    } else if (player === 'O') {
      state.player = 'X';
    } else if (player === '***') {
      if (state.player === 'X') {
        state.player = 'O';
      } else {
        state.player = 'X';
      }
    }
    event.target.innerText = state.player;
  }
};

// Toggles a location between 'X' and 'O'
const toggle = togglePiece();

// Updates board placement for calculating wins
const updateGameBoard = (coord) => {
  let value = 0;
  if (state.player === 'O') {
    value = 1;
  } else {
    value = 2;
  }
  state.coord = coord;
  gameBoard[coord[0]][coord[1]] = value;
}

// Functions that check for victory conditions
const checkRow = (coord) => {
  let row = coord[0];
  let total = 0;
  for (let i = 0; i < 3; i++) {
    let col = i;
    let valueAtPosition = gameBoard[row][col];
    if (valueAtPosition === 0) {
      return;
    }
    total += valueAtPosition;
  }
  victory(total);
};

const checkCol = (coord) => {
  let col = coord[1];
  let total = 0;
  for (let i = 0; i < 3; i++) {
    let row = i;
    let valueAtPosition = gameBoard[row][col];
    if (valueAtPosition === 0) {
      return;
    }
    total += valueAtPosition;
  }
  victory(total);
};

const checkMajorDiag = (coord) => {
  let row = coord[0] - coord[0];
  let col = coord[1] - coord[0];
  let total = 0;

  for (let i = 0; i < 3; i++) {
    let valueAtPosition = gameBoard[row][col];
    if (typeof valueAtPosition === 'undefined' || valueAtPosition === 0) {
      return;
    }
    total += valueAtPosition;
    row++;
    col++;
  }
  victory(total);
};

const checkMinorDiag = (coord) => {

};

const victory = (value) => {
  if (value === 6) {
    console.log('X is the victor!');
  } else if (value === 3) {
    console.log('O is the winner!');
  }
};
