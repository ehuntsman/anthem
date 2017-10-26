import axios from 'axios';
import store from './store';
import apiURL from './api';

import {getPokemon} from './workspaceReducer';
import {dispatchGetList} from './listService';

export function dispatchGetPokemon(id){
    const promise = axios.get(apiURL+id).then(response => response.data);
    console.log(promise);
    store.dispatch(getPokemon(promise));
}