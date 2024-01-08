import { SET_WIDGET_PAGE } from "../actions"

export const setWidgetPage = (page: number) => {
  return {
    type: SET_WIDGET_PAGE,
    payload: page,
  }
}

export default setWidgetPage;