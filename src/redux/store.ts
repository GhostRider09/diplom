import {
  combineReducers,
  createStore
} from "redux";

import catalogWidgetReducer from './reducers/catalogWidgetReducer';
import commonReducer from './reducers/commonReducer';

const rootReducer = combineReducers({
  catalogWidget: catalogWidgetReducer,
  cmn: commonReducer,
});

const store = createStore(rootReducer);

export default store;