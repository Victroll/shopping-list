import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [thunk, routerMiddleware(createBrowserHistory())];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const config = globalReducer => createStore(globalReducer, enhancer);

export default config;
