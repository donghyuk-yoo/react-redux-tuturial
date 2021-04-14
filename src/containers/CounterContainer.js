// 컨테이너 컴포넌트(스토어와 연결된 컴포넌트), 스토어접근 원하는 상태 받아 오고, 액션도 디스패치
import React, { useCallback } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
// import { useStore } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  // number가 바뀌어 리렌더링때마다 함수가 새로 만들어지므로 useCallback로 최적화
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  // useStore 컴포넌트 내부에서 리덕스 스토어 객체 직접 사용, 꼭 필요한 경우에만 사용
  // const store = useStore();
  // store.getState();
  // store.dispatch({type: 'SAMPLE-ACTION'})

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
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
