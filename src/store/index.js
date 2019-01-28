import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import newListReducer from './new-list';
import showListReducer from './show-list';
import config from './config';

const rootReducer = combineReducers({
  router,
  newListReducer,
  showListReducer
});

export default config(rootReducer);
