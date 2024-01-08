import { SWITCH_WIDGET_LAZY } from "../actions"

export const switchLazyLoad = (canLoad: boolean) => {
  return {
    type: SWITCH_WIDGET_LAZY,
    payload: !!canLoad,
  }
}

export default switchLazyLoad;