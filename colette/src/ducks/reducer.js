import axios from 'axios';

const initialState = {
  loggedIn: {},
}

// const GET_CHARACTERS = "GET_CHARACTERS";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case GET_CHARACTERS + "_PENDING":
        //     return Object.assign({}, state, { loading: true, error: false })
        // case GET_CHARACTERS + "_REJECTED":
        //     return Object.assign({}, state, { loading: false, error: true })
        // case GET_CHARACTERS + "_FULFILLED":
        //     return Object.assign({}, state, { characters: action.payload })

        default: return state;
    }
}


export function getUserInfo() {
    const url = `/api/loggeduser`
    const promise = axios.get(url).then(res => {
        return res.data
    });
    // return {
    //     type: GET_USER,
    //     payload: promise
    // }
}
