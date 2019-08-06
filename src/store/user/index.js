import { LOG_IN, LOG_OUT } from './actionTypes';

const initialState = {
  logged: false,
  userName: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        logged: true,
        userName: action.user
      };
    case LOG_OUT:
      return {
        ...state,
        logged: false,
        userName: null
      };
    default:
      return state;
  }
};

export default reducer;
