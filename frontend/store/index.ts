import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import authReducer from './auth/reducers/auth.reducers';
import AuthType from './auth/types';

export interface RootState {
  auth: AuthType
}

const appStore = createStore<RootState, any, any, any> (
  combineReducers({
    auth: authReducer
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default appStore;