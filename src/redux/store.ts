import {
  combineReducers,
  createStore
} from "redux";

import catalogWidgetReducer from './reducers/catalogWidgetReducer';

const rootReducer = combineReducers({
  catalogWidget: catalogWidgetReducer,
});

const store = createStore(rootReducer);

export default store;