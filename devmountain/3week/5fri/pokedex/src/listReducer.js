const initialState = {
    loading: false,
    pokeList: []
}

//ACTION TYPES
const GET_LIST = "GET_LIST";

//REDUCER
export default function listReducer(state = initialState, action){
    switch(action.type){
        case GET_LIST + "_PENDING":
            return{
                loading: true,
                pokeList: []
            }
        case GET_LIST + "_FULFILLED":
            return {
                loading: false,
                pokeList: action.payload
            }
        default: return state;
    }
}

//ACTION CREATORS
export function getList(promise){
    return{
        type: GET_LIST,
        payload: promise
    }
}