import * as TYPES from './actionTypes';

const initialState = {
  title: '',
  prevTitle: '',
  products: []
};

const reducer = (state = initialState, action) => {
  let newProducts;
  let prod;
  switch(action.type) {
      case TYPES.MOVE_ITEM_UP:
        newProducts = [...state.products];
        prod = { ...newProducts[action.id - 1] };
        newProducts[action.id - 1] = { ...newProducts[action.id] };
        newProducts[action.id] = prod;
        return {
          ...state,
          products: newProducts
        };
      case TYPES.MOVE_ITEM_DOWN:
        newProducts = [...state.products];
        prod = { ...newProducts[action.id + 1] };
        newProducts[action.id + 1] = { ...newProducts[action.id] };
        newProducts[action.id] = prod;
        return {
          ...state,
          products: newProducts
        };
      case TYPES.SET_LIST:
        return {
          ...state,
          products: action.products
        };
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
        title: action.title,
        prevTitle: state.title
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
