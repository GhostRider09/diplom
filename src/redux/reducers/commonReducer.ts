import { ICommonReducer, TReducerActionProps } from "../../models";
import { UPDATE_CART_POSITION_COUNTER } from "../actions";

const initialState: ICommonReducer = {
  cartCounter: 0,
};

const commonReducer = (state = initialState, action: TReducerActionProps) => {
  switch (action.type) {    
    case UPDATE_CART_POSITION_COUNTER:
      return {
        ...state,
        cartCounter: action.payload,
      }
    default:
      return state;
  }
};

export default commonReducer;