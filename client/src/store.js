import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/index';

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const middleware = [
  thunkMiddleware,
  ...process.env.NODE_ENV === 'production' ? [] : [logger],
];

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ...middleware,
    ),
  ),
);
