import { LOG_IN, LOG_OUT } from './actionTypes';

/** API */
import {
  logIn as logInAPI,
  logInWithToken as logInWithTokenAPI
} from '../../api/user';

/** Constants */
import { sessionStorageToken } from '../../utils/constants';

export const logIn = (user, password, dispatch) =>
  logInAPI(user, password).then(({ data: { token } }) => {
    sessionStorage.setItem(sessionStorageToken,  token);
    dispatch({ type: LOG_IN, user });
  });

export const logOut = dispatch => {
  sessionStorage.removeItem(sessionStorageToken);
  dispatch({ type: LOG_OUT });
};

export const logInWithToken = dispatch => {
  const token = sessionStorage.getItem(sessionStorageToken);
  if (token) {
    logInWithTokenAPI(token).then(({ data: { userName }}) => {
      if (userName) {
        dispatch({ type: LOG_IN, user: userName });
      }
    }).catch(() => sessionStorage.removeItem(sessionStorageToken));
  }
};
