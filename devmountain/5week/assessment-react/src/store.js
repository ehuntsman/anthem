import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from "redux-promise-middleware";
import reducer from './reducer';

export default createStore(reducer, undefined, applyMiddleware(promiseMiddleware()));