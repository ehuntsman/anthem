import axios from 'axios';
import {getList} from './listReducer';
import store from './store';
import apiURL from './api';

export function dispatchGetList(){
    const promise = axios.get(apiURL).then(response => response.data);
    store.dispatch(getList(promise));
}