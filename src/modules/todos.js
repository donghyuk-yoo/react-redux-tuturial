// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋값 변경
const INSERT = 'todos/INSERT'; // 새 todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo 체크/해제
const REMOVE = 'todos/REMOVE'; // todo 제거

// 액션 생성 함수, 액션 객체를 담은 함수
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

// 초기 상태
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'todo 1',
      done: true,
    },
    {
      id: 2,
      text: 'todo 2',
      done: false,
    },
  ],
};

// 리듀서, action 객체를 받아 참고해 새로운 상태를 반환
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        // 불변성 유지를 위해 스프레드 연산자를 이용한 객체복사
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todos;
