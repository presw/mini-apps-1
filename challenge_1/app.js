// Game board and positions
const gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// State of the game
let state = {
  player: 'O',
  winner: null,
  victory: false,
  moves: 0,
  xWins: 0,
  oWins: 0,
}

const puppyUrl = 'https://i.ibb.co/dtt7CMY/Screen-Shot-2019-08-12-at-8-09-09-PM.png';
const kittenUrl = 'https://i.ibb.co/fQxwG7t/Screen-Shot-2019-08-12-at-8-08-40-PM.png';

// Toggles a piece on the board
const toggle = () => {
  if (state.victory === true) {
    return;
  }
  if (locationTaken(event)) {
    return;
  }
  if (state.player === 'X') {
    state.player = 'O';
    event.target.innerHTML = `<img class=image src='${puppyUrl}'/>`
  } else {
    state.player = 'X';
    event.target.innerHTML = `<img class=image src='${kittenUrl}'/>`
  }
  // event.target.innerText = state.player;
  state.moves++;
  let coord = JSON.parse(event.target.id);
  updateGameBoard(coord);
  checkBoardForVictory(coord);
};

const updateUserScore = (winner) => {
  if (winner === 'X') {
    document.getElementById('player-x-score').innerText = state.xWins;
  } else {
    document.getElementById('player-o-score').innerText = state.oWins;
  }
}

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

// Verifies if a location is available
const locationTaken = (event) => {
  let coord = JSON.parse(event.target.id);
  let position = gameBoard[coord[0]][coord[1]];
  if (position > 0) {
    return true;
  } else {
    return false;
  }
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
    col--;
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

// Victory calculator
const victory = (value) => {
  if (value === 6) {
    alert('X is the victor!');
    state.winner = 'X';
    state.xWins++;
    updateUserScore(state.winner);
    return true;
  } else if (value === 3) {
    alert('O is the winner!');
    state.winner = 'O';
    state.oWins++;
    updateUserScore(state.winner);
    return true;
  }
  return false;
};

// Checks for a game over (win or draw)
const gameOver = () => {
  if (state.winner) {
    alert(`The game is over.\n${state.winner} reigns victorious!`);
  } else if (state.moves === 9) {
    alert(`The game is a draw.\nThe only winning move is not to play.`);
  }
  return !!state.winner;
};

// Resets the game board and state
const reset = () => {
  state = {
    player: state.winner,
    winner: null,
    victory: false,
    moves: 0,
    oWins: state.oWins,
    xWins: state.xWins,
  }
  var boxes = document.getElementById('game-board').querySelectorAll('.box');
  boxes.forEach((element) => {
    element.innerText = '***';
  });
  gameBoard.forEach((array) => {
    array.forEach((value, index) => {
      array[index] = 0;
    });
  });
};
