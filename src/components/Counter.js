import React from 'react';

// 프레젠테이션 컴포넌트, 보여주기
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
