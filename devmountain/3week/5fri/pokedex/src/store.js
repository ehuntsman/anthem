import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import listReducer from './listReducer';
import workspaceReducer from './workspaceReducer';

export default createStore(combineReducers({listReducer, workspaceReducer}), undefined, applyMiddleware(promiseMiddleware()));