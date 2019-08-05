import axios from 'axios';

/** Constants */
import { sessionStorageToken } from '../utils/constants';

export const saveNewList = (title, owner, products) => {
  axios
    .defaults
    .headers
    .common
    .Authorization = sessionStorage.getItem(sessionStorageToken);
  axios.put('http://localhost:3214/list/create', {
    name: title,
    owner,
    products: JSON.stringify(products)
  });
};

export const getAllLists = owner => {
  axios
    .defaults
    .headers
    .common
    .Authorization = sessionStorage.getItem(sessionStorageToken);
  return axios.get('http://localhost:3214/list/all', {
    params: {
      owner
    }
  });
};
