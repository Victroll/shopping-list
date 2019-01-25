import * as TYPES from './actionTypes';

const initialState = {
  title: 'TEST',
  products: []
};

const reducer = (state = initialState, action) => {
  let newProducts;
  switch(action.type) {
      case TYPES.RESET:
        return {
          ...initialState
        };
      case TYPES.UPDATE_FIELD:
      newProducts = [...state.products];
      newProducts[action.id][action.field] = action.value;
      return {
        ...state,
        products: newProducts
      };
    case TYPES.REMOVE_PRODUCT:
      newProducts = [...state.products];
      newProducts.splice(action.id, 1);
      return {
        ...state,
        products: newProducts
      };
    case TYPES.SAVE_TITLE:
      return {
        ...state,
        title: action.title
      };
    case TYPES.ADD_PRODUCT:
      newProducts = [...state.products];
      newProducts.push({
        name: '',
        amount: 1,
        uds: 0
      });
      return {
        ...state,
        products: newProducts
      };
    default:
      return state;
  }
};

export default reducer;
