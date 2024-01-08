import { TProduct } from "../../models";
import { SET_ITEM_LIST } from "../actions"

export const setItemList = (items:TProduct[]) => {
  return {
    type: SET_ITEM_LIST,
    payload: items,
  }
}

export default setItemList;