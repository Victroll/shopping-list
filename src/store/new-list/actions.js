import * as TYPES from './actionTypes';

export const addProduct = dispatch => {
  dispatch({
    type: TYPES.ADD_PRODUCT
  });
};

export const saveTitle = (title, dispatch) => {
  dispatch({
    type: TYPES.SAVE_TITLE,
    title
  });
};

export const removeProduct = (id, dispatch) => {
  dispatch({
    type: TYPES.REMOVE_PRODUCT,
    id
  });
};

export const updateProduct = (id, field, value, dispatch) => {
  dispatch({
    type: TYPES.UPDATE_FIELD,
    id,
    field,
    value
  });
};

export const resetList = dispatch => {
  dispatch({
    type: TYPES.RESET
  });
};

export const saveList = dispatch => {
  dispatch({
    type: TYPES.SAVE_LIST
  });
};
