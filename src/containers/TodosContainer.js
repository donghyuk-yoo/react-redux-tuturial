import React, { useCallback } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

// connect 방식, mapStateToProps와 mapDispatchToProps로 현재 상태와 dispatch 함수를 props로 전달
// const TodosContainer = ({
//   input,
//   todos,
//   changeInput,
//   insert,
//   toggle,
//   remove,
// }) => {
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={changeInput}
//       onInsert={insert}
//       onToggle={toggle}
//       onRemove={remove}
//     />
//   );
// };

// useSelector, useDispatch 방식
const TodosContainer = () => {
  const state = useSelector((state) => ({
    todos: state.todos.todos,
    input: state.todos.input,
  }));

  const dispatch = useDispatch();
  // dispatch가 발생할 때만 함수를 생성
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
    dispatch,
  ]);
  // useCallback 미사용시 매리렌더링시 마다 새함수 생성됨
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return (
    <Todos
      input={state.input}
      todos={state.todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

// HOOK사용시 React.memo를 사용하여 최적화
export default React.memo(TodosContainer);

// state : 현재 스토어가 지니고 있는 상태(리듀서 함수의 state 아님)
// const mapStateToProps = (state) => {
//   return {
//     // 현재 스토어가 지니고 있는 상태, 루트 리듀서 중 todos컴포넌트의 상태(state=initialState)에서 todos 객체를 반환
//     todos: state.todos.todos,
//     input: state.todos.input,
//   };
// };

// const mapDisptchToProps = (dispatch) => ({
//   changeInput: (input) => {
//     dispatch(changeInput(input));
//   },
//   insert: (text) => {
//     dispatch(insert(text));
//   },
//   toggle: (id) => {
//     dispatch(toggle(id));
//   },
//   remove: (id) => {
//     dispatch(remove(id));
//   },
// });

// connect 함수는 부모 컴포넌트 리렌더링때 해당 컴포넌트 props 미변경시 리렌더링 방지(최적화 자동적용)
// export default connect(mapStateToProps, mapDisptchToProps)(TodosContainer);
