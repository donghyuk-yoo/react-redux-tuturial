// 컨테이너 컴포넌트(스토어와 연결된 컴포넌트), 스토어접근 원하는 상태 받아 오고, 액션도 디스패치
import React from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);

  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// useSelector

// connect 방식
// 스토어의 현재 지니고 있는 상태를 가리키는 state를 파라미터로 받아옴
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// 스토어의 내장 함수dispatch를 파라미터로 받아옴
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// connect 방식
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default CounterContainer;
