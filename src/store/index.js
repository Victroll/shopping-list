import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import newListReducer from './new-list';
import config from './config';

const rootReducer = combineReducers({
  router,
  newListReducer
});

export default config(rootReducer);
