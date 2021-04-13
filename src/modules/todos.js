import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋값 변경
const INSERT = 'todos/INSERT'; // 새 todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo 체크/해제
const REMOVE = 'todos/REMOVE'; // todo 제거

let id = 3;
// 액션 생성 함수, 액션 객체를 담은 함수
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

// createAction로 액션 생성 함수 간소화
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
// 추가되는 todo 내용(text)을 todos 객체배열의 첫번째에 넣기위해(원하는 순서로 합칠 수 있게),
// 배열 내장함수를 이용해 객체배열로 만들어 주었다.
export const insert = createAction(INSERT, (text) => [
  {
    id: id++,
    text: text,
    done: false,
  },
]);
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

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
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         // 불변성 유지를 위해 스프레드 연산자를 이용한 객체복사
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// };

// 리듀서, handleActions 사용, 모든 파라미터는 payload에
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    [INSERT]: (state, action) => ({
      ...state,
      // todos: state.todos.concat(action.payload),
      // 객체배열.concat(객체)일 때 파라미터인 객체는 객체배열의 가장 뒤 원소로 합쳐진 배열이 반환되나,
      // 객체.concat(객체배열)의 경우 합쳐진 객체배열을 반환하지 않고 오류를 반환.
      // 객체를 []로 씌워 그 객체 하나만 들어있는 객체배열( [객체] )로 변경 후 사용하면
      // 객체배열1.concat(객체배열2)로 원소들이 1,2 순서로 합쳐진 하나의 객체 배열이 반환된다.
      todos: action.payload.concat(state.todos),
    }),
    [TOGGLE]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    // 모든 추가 데이터 값을 action.payload로 사용하다보니 정확히 어떤 값을 의미하는지 알 수 없다.
    // 객체 비구조화 할당으로 해결
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState,
);

export default todos;
