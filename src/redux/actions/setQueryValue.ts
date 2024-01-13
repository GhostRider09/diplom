import { SET_QUERY_VALUE } from "../actions"

export const setQueryValue = (value: string) => {
  return {
    type: SET_QUERY_VALUE,
    payload: value,
  }
}

export default setQueryValue;