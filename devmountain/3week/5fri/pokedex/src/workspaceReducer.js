import apiURL from './api';

const initialState = {
    loading: false,
    pokemon: {},
    initialLoad: true
};

//ACTION TYPES
const GET_POKEMON = "GET_POKEMON";

//REDUCER
export default function workspaceReducer(state = initialState, action){
    switch(action.type){
        case GET_POKEMON + "_PENDING":
            return{
                loading: true,
                initialLoad: false,
                pokemon: {}
            }
        case GET_POKEMON + "_FULFILLED":
            return Object.assign({}, state, {loading: false, pokemon: action.payload});
        default: return state;
    }
}

//ACTION CREATORS
export function getPokemon(promise){
    return{
        type: GET_POKEMON,
        payload: promise
    }
}