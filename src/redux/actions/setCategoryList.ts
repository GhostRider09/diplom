import { ICategory } from "../../models";
import { SET_CATEGORY_LIST } from "../actions"

export const setCategoryList = (items:ICategory[]) => {
  return {
    type: SET_CATEGORY_LIST,
    payload: items,
  }
}

export default setCategoryList;