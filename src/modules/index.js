// 파일명을 index.js로 하여 import시 디렉토리까지만 명시
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 루트 리듀서
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
