import React from 'react';
import Square from './square.jsx';

const Column = (props) => {
  let squares = [];
  for (let i = 0; i < 6; i++) {
    squares.push(<Square key={i} x={props.columnIndex} y={i} />);
  }
  return (
    <div onClick={(event) => {props.onColumnClick(event, props.columnIndex)}} className="column">{squares}</div>
  )
}

export default Column;