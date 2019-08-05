import axios from 'axios';

export const logIn = (user, password) =>
  axios.post('http://localhost:3214/user/login', {
    name: user,
    password
  });

export const logInWithToken = token =>
  axios.post('http://localhost:3214/user/login', {
    userToken: token
  });
