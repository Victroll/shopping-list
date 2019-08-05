import { LOG_IN, LOG_OUT } from './actionTypes';

/** API */
import { logIn as logInAPI } from '../../api/user';

export const logIn = (user, password, dispatch) => {
  logInAPI(user, password).then(({ data: { token } }) => {
    sessionStorage.setItem('shoppingListToken',  token);
    dispatch({ type: LOG_IN, user });
  }).catch(error => console.log(error));
};

export const logOut = dispatch => {
  sessionStorage.removeItem('shoppingListToken');
  dispatch({ type: LOG_OUT });
};
