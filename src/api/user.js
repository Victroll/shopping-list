import axios from 'axios';

/** Constants */
import { sessionStorageToken, API_BASE } from '../utils/constants';

export const logIn = (user, password) =>
  axios.post(`${API_BASE}/user/login`, {
    name: user,
    password
  });

export const logInWithToken = token =>
  axios.post(`${API_BASE}/user/login`, {
    userToken: token
  });

export const changePassword = newPassword => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem(
    sessionStorageToken
  );
  return axios
    .post(`${API_BASE}/user/changePAssword`, {
      password: newPassword
    })
    .then(({ data: { token } }) => {
      sessionStorage.setItem(sessionStorageToken, token);
    });
};
