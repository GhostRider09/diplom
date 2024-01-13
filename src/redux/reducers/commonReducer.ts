import { ICommonReducer, TReducerActionProps } from "../../models";
import { UPDATE_CART_POSITION_COUNTER, SET_QUERY_VALUE } from "../actions";

const initialState: ICommonReducer = {
  cartCounter: 0,
  query: ""
};

const commonReducer = (state = initialState, action: TReducerActionProps) => {
  switch (action.type) {    
    case UPDATE_CART_POSITION_COUNTER:
      return {
        ...state,
        cartCounter: action.payload,
      }
    case SET_QUERY_VALUE:
      return {
        ...state,
        query: action.payload,
      }
    default:
      return state;
  }
};

export default commonReducer;