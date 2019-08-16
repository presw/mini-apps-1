import React from 'react';

const Square = (props) => {
  return (
    <div className="square" id={`${props.x}${props.y}`} >Sq test</div>
  )
}

export default Square;
