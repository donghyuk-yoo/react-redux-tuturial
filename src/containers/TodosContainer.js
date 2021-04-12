import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

// state : 현재 스토어가 지니고 있는 상태(리듀서 함수의 state 아님)
const mapStateToProps = (state) => {
  return {
    // 현재 스토어가 지니고 있는 상태, 루트 리듀서 중 todos컴포넌트의 상태(state=initialState)에서 todos 객체를 반환
    todos: state.todos.todos,
    input: state.todos.input,
  };
};

// mapStateToProps의 return문과 동일하게 동작
const mapDisptchToProps = (dispatch) => ({
  changeInput: (input) => {
    dispatch(changeInput(input));
  },
  insert: (text) => {
    dispatch(insert(text));
  },
  toggle: (id) => {
    dispatch(toggle(id));
  },
  remove: (id) => {
    dispatch(remove(id));
  },
});

export default connect(mapStateToProps, mapDisptchToProps)(TodosContainer);
