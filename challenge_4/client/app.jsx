import React from 'react';
import GameBoard from './components/gameBoard.jsx';

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

    // document.getElementById(id).className = true;
    console.log(event);
    let board = this.state.gameBoard;
    for (let i = board.length - 1; i >= 0; i--) {
      if (board[i][data] === null) {
        let id = `${data}` + `${i}`
        board[i][data] = this.state.currentPlayer;
        if (this.state.currentPlayer) {
          console.log(id);
          this.setState({ currentPlayer: false });
          document.getElementById(id).className = false;
        } else {
          console.log(id);
          this.setState({ currentPlayer: true });
          document.getElementById(id).className = true;
        }
        this.setState({ gameBoard: board });
        break;
      }
      console.log(board);
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
