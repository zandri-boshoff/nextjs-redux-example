import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { Context, createWrapper } from 'next-redux-wrapper';
import type {} from 'next';
import appReducer from './reducer';
// import rootReducer from './reducer'
import rootSaga from './saga';
import { moduleReducers } from '../modules';

const bindMiddleware = (middleware: any) => {
  // figure out this type?
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export interface SagaStore extends Store {
  sagaTask: Task;
}

export const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(appReducer, bindMiddleware([sagaMiddleware]));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
