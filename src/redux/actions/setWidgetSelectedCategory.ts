import { SET_SELECTED_CATEGORY } from "../actions"

export const setWidgetSelectedCategory = (categoryId: number) => {
  return {
    type: SET_SELECTED_CATEGORY, 
    payload: categoryId || 0
  }
}

export default setWidgetSelectedCategory;