import { ICatalogWidgetReducer, TReducerActionProps } from "../../models";
import {  
  INCREMENT_WIDGET_PAGE,
  SWITCH_WIDGET_LAZY,
  APPEND_ITEMS_TO_LIST,
  SET_WIDGET_PAGE,
  SET_ITEM_LIST,
  SET_SELECTED_CATEGORY 
} from "../actions";

const initialState:ICatalogWidgetReducer = {
  selectedCategory: 0,
  page: 1,
  products: [],
  canLazyLoad: true,
};

const catalogWidgetReducer = (state = initialState, action:TReducerActionProps) => {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: parseInt(action.payload) || 0,
      }
    case SET_WIDGET_PAGE:
      return {
        ...state,
        page: parseInt(action.payload) || 1,
      }
    case INCREMENT_WIDGET_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    case SWITCH_WIDGET_LAZY:
      return {
        ...state,
        canLazyLoad: !!action.payload,
      }
    case APPEND_ITEMS_TO_LIST:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      }
    case SET_ITEM_LIST:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
};

export default catalogWidgetReducer;