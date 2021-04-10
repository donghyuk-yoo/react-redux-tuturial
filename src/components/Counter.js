import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onIncrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
