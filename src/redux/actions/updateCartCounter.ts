import { UPDATE_CART_POSITION_COUNTER } from "../actions"

export const updateCartCounter = (value:number) => {
  return {
    type: UPDATE_CART_POSITION_COUNTER,
    payload: value,
  }
}

export default updateCartCounter;