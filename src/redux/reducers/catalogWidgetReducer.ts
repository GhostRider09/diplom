import {  SET_CATEGORY_LIST, SET_SELECTED_CATEGORY } from "../actions";

const initialState = {
  selectedCategory: 0,
  offset: 0,
  categories: []
};

const catalogWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: parseInt(action.payload) || 0,
      }
    case 'SSET_CATEGORY_LIST':
      state.categories = action.payload;

      console.log('bd', action);
      // console.log('ad', state);
      return {
        ...state,        
      }
    default:
      return state;
  }
};

export default catalogWidgetReducer;