import React from 'react';

const Square = (props) => {
  return (
    <div className="square">
      <div id={`${props.x}${props.y}`} ></div>
    </div>
  )
}

export default Square;
