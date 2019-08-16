import React from 'react';
import GameBoard from './components/gameBoard.jsx';
import VictoryConditions from './victoryConditions.jsx';

let victory = new VictoryConditions();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ],
      currentPlayer: false,
    }
    this.onColumnClick = this.onColumnClick.bind(this);
  }

  componentDidMount() {
    // stuff
  }

  onColumnClick(event, data) {
    event.persist();
    let board = this.state.gameBoard;
    let id;
    let columnFull = true;
    for (let i = board.length - 1; i >= 0; i--) {
      if (board[i][data] === null) {
        columnFull = false;
        id = `${data}` + `${i}`
        board[i][data] = this.state.currentPlayer;
        if (this.state.currentPlayer) {
          this.setState({ currentPlayer: false });
          document.getElementById(id).className = false;
        } else {
          this.setState({ currentPlayer: true });
          document.getElementById(id).className = true;
        }
        this.setState({ gameBoard: board });
        break;
      }
    }
    if (!columnFull) {
      id = id.split('');
      id = id.map((element) => { return parseInt(element) });
      victory.checkCol(id, board, this.state.currentPlayer);
      victory.checkRow(id, board, this.state.currentPlayer);
      victory.checkMajorDiag(id, board, this.state.currentPlayer);
      victory.checkMinorDiag(id, board, this.state.currentPlayer);
    }
  }

  render() {
    return (
      <div>
        <GameBoard onColumnClick={this.onColumnClick} />
      </div>
    )
  }
}

export default App;
