import * as TYPES from './actionTypes';

export const setList = (dispatch, id, list) =>
  dispatch({
    type: TYPES.SET_LIST,
    id,
    list
  });

export const checkProduct = (dispatch, id) =>
  dispatch({
    type: TYPES.CHECK_PRODUCT,
    id
  });

export const resetList = dispatch =>
  dispatch({
    type: TYPES.RESET_LIST
  });
