import React from 'react';
import Column from './column.jsx'

const GameBoard = (props) => {
  let columns = [];
  for (let i = 0; i < 7; i++) {
    let columnIndex = i;
    columns.push(<Column test={'test'} onColumnClick={props.onColumnClick} columnIndex={columnIndex} key={i} />);
  }
  return (
    <div id="game-board-container">
      <div id="game-board">
        {columns}
      </div>
    </div>
  )
}

export default GameBoard;
