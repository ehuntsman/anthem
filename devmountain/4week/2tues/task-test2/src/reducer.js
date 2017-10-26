const initialState = {
    tasks: ["do a little diddy", "watch Doctor Who", "p0wn da n00bs", "bake a pretty cake", "do the cooking by the book"]
}
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";

export default function reducer(state=initialState, action){
    switch(action.type){
        case ADD_TASK:
            var newState = {};
            var taskie = action.payload
            var newTasks = [...state.tasks, taskie]
            return{
                tasks: newTasks
            }
        case REMOVE_TASK:
            let taskie = action.payload;
            var newState={}
            var newTasks = [...state.tasks];
            newTasks.splice(taskie, 1);
            return {
                tasks: newTasks
            }
        default:
            return state;
    }
}

export function addTask(newTask){
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export function deleteTask(taskie){
    return {
        type: REMOVE_TASK,
        payload: taskie
    }
}