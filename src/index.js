import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules/';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  // 리액트 컴포넌트에서 스토어를 사용할 수 있도록 Provider 컴포넌트로 감싸준다,
  // store를 props로
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
