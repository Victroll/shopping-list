import * as TYPES from './actionTypes';

/**
 * list element will have the next template:
 * {
 *  name: String,
 *  amount: Number,
 *  uds: Number,
 *  caught: Bool
 * }
 * where:
 * name -> Name of the prduct
 * amount -> Amount of the product
 * uds -> kgs. or uds.
 * caugth -> If the product has been caught yet or not
 */
const initialState = {
  title: null,
  list: []
};

const reducer = (state = initialState, action) => {
  let newList = [];
  switch(action.type) {
    case TYPES.RESET_LIST:
      return {
        ...state,
        list: state.list.map(prod => ({
          ...prod,
          caught: false
        }))
      };
    case TYPES.CHECK_PRODUCT:
      newList = [...state.list];
      newList[action.id] = {...state.list[action.id]};
      newList[action.id].caught = !newList[action.id].caught;
      return {
        ...state,
        list: newList
      };
    case TYPES.SET_LIST:
      return {
        ...state,
        title: action.id,
        list: action.list
      };
    default:
      return state;
  }
};

export default reducer;
