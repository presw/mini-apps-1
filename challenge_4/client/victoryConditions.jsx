// Functions that check for victory conditions

class VictoryConditions {
  constructor() {

  }

  checkRow(coord, gameBoard, player) {
    let col = coord[0];
    let total = 0;
    for (let i = 0; i < 6; i++) {
      let row = i;
      let position = gameBoard[row][col];
      if (position === player) {
        total += 1;
        if (total === 4) {
          return this.victory(player);
        }
      } else {
        total = 0;
      }
    }
  };
  
  checkCol(coord, gameBoard, player) {
    let row = coord[1];
    let total = 0;
    for (let i = 0; i < 7; i++) {
      let col = i;
      let position = gameBoard[row][col];
      if (position === player) {
        total += 1;
        if (total === 4) {
          return this.victory(player);
        }
      } else {
        total = 0;
      }
    }
  };
  
  checkMajorDiag(coord, gameBoard, player) {
    let col = coord[0] - coord[0];
    let row = coord[1] - coord[0];
    let total = 0;
    
    for (let i = 0; i < 6; i++) {
      if (typeof gameBoard[row] !== 'undefined') {
        let position = gameBoard[row][col];
        if (position === player) {
          total += 1;
          if (total === 4) {
            return this.victory(player);
          }
        } else {
          total = 0;
        }
        row++;
        col++;
      }
    }
  };
  
  checkMinorDiag(coord, gameBoard, player) {
    let col = coord[0] - coord[0];
    let row = coord[0] + coord[1];
    let total = 0;
  
    for (let i = 0; i < 6; i++) {
      if (typeof gameBoard[row] !== 'undefined') {
        let position = gameBoard[row][col];
        if (position === player) {
          total += 1;
          if (total === 4) {
            return this.victory(player);
          }
        } else {
          total = 0;
        }
        col++;
        row--;
      }
    }
  };
  
  victory(player) {
    if (player === false) {
      return console.log("Red is the winner!");
    } else {
      return console.log("Black is the winner!");
    }
  }
}

export default VictoryConditions;
