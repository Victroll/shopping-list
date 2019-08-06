import axios from 'axios';

/** Constants */
import { sessionStorageToken, API_BASE } from '../utils/constants';

export const saveNewList = (title, owner, products) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem(
    sessionStorageToken
  );
  axios.put(`${API_BASE}/list/create`, {
    name: title,
    owner,
    products: JSON.stringify(products)
  });
};

export const saveList = (title, newTitle, owner, products) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem(
    sessionStorageToken
  );
  axios.post(`${API_BASE}/list/single/${title}`, {
    owner,
    newName: newTitle,
    products: JSON.stringify(products)
  });
};

export const getAllLists = owner => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem(
    sessionStorageToken
  );
  return axios.get(`${API_BASE}/list/all`, {
    params: {
      owner
    }
  });
};

export const deleteList = (title, owner) => {
  axios.defaults.headers.common.Authorization = sessionStorage.getItem(
    sessionStorageToken
  );
  return axios.delete(`${API_BASE}/list/single/${title}`, {
    params: {
      owner
    }
  });
};
