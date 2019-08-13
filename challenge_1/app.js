const gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let state = {
  player: 'O',
  winner: null,
  victory: false,
  moves: 0,
}

const togglePiece = () => {
  return () => {
    if (state.victory === true) {
      return;
    }
    let player = event.target.innerText;
    if (player === 'X') {
      return;
    } else if (player === 'O') {
      return;
    } else if (player === '***') {
      if (state.player === 'X') {
        state.player = 'O';
      } else {
        state.player = 'X';
      }
    }
    event.target.innerText = state.player;
    state.moves++;
    let coord = JSON.parse(event.target.id);
    updateGameBoard(coord);
    checkBoardForVictory(coord);
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
  let row = coord[0] - coord[0];
  let col = coord[0] + coord[1];
  let total = 0;

  for (let i = 0; i < 3; i++) {
    let valueAtPosition = gameBoard[row][col];
    if (typeof valueAtPosition === 'undefined' || valueAtPosition === 0) {
      return;
    }
    total += valueAtPosition;
    row++;
    col--
  }
  victory(total);
};

const checkBoardForVictory = (coord) => {
  checkRow(coord);
  checkCol(coord);
  checkMajorDiag(coord);
  checkMinorDiag(coord);
  if (!!!state.winner && state.moves === 9) {
    gameOver();
  }
}

const victory = (value) => {
  if (value === 6) {
    alert('X is the victor!');
    state.winner = 'X'
    return true;
  } else if (value === 3) {
    alert('O is the winner!');
    state.winner = 'O';
    return true;
  }
  return false;
};

const gameOver = () => {
  if (state.winner) {
    alert(`The game is over.\n${state.winner} reigns victorious!`);
  } else if (state.moves === 9) {
    alert(`The game is a draw.\nThe only winning move is not to play.`);
  }
  return !!state.winner;
};

const reset = () => {
  state = {
    player: 'O',
    winner: null,
    victory: false,
    moves: 0,
  }
  var boxes = document.getElementById('game-board').querySelectorAll('.box');
  boxes.forEach((element) => {
    element.innerText = '***';
  });
};
