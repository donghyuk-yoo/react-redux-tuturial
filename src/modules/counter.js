// Ducks 패턴 사용
// (modules디렉토리에 액션 타입, 액션 생성 함수, 리듀서 함수를 기느열로 파일 하나에 몰아서 작성)
import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수, 기본적인 방법
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// redux-actions의 createAction() 사용
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서 함수, 기본적인 방법
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         // 불변성을 지켜 state.number값을 참조한 후 새 객체를 만들어 반환
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// 리듀서 함수, handleActions() 사용
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
