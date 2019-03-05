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

export const setList = (dispatch, products) => {
  dispatch({
    type: TYPES.SET_LIST,
    products
  });
};

export const moveItem = (dispatch, id, up) => {
  dispatch({
    type: up
      ? TYPES.MOVE_ITEM_UP
      : TYPES.MOVE_ITEM_DOWN,
    id
  });
};
