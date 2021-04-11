import React from 'react';
import { connect } from 'react-redux';
import { chageInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({ todos, remove }) => {
  return <Todos todos={todos} onRemove={remove} />;
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
  remove: (id) => {
    dispatch(remove(id));
  },
});

export default connect(mapStateToProps, mapDisptchToProps)(TodosContainer);
