import {combineReducers} from 'redux';

import newsReducer from '../reducers/newsReducer';

export default combineReducers({
  //@ts-ignore
  newsState: newsReducer,
});
