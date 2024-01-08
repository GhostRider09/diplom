import { ICategory } from "../../models";
import { APPEND_ITEMS_TO_LIST } from "../actions"

export const appendCategoryList = (items:ICategory[]) => {
  return {
    type: APPEND_ITEMS_TO_LIST,
    payload: items,
  }
}

export default appendCategoryList;