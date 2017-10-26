import axios from 'axios';

const initialState = {
    error: false,
    loading: false,
    tasks: ["travel the universe with the doctor","go to the bounce lounge with star","defeat bill with dipper"],
    someTask: ''
}

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const SET_TASKS = "SET_TASKS";
const TASK_DETAILS = "TASK_DETAILS";
const UPDATE_TASK = "UPDATE_TASK";

var tempId = 8;

export default function reducer(state=initialState, action) {
    switch(action.type){
        case ADD_TASK:
            return{
                error: false,
                loading: false,
                tasks: [...state.tasks, action.payload],
                someTask: state.someTask
            }
        case REMOVE_TASK:
            return {
                error: false,
                loading: false,
                tasks: state.tasks.filter((task) => task.id != action.payload),
                someTask: state.someTask
            }
        case UPDATE_TASK:
            return Object.assign({}, state, {tasks: action.payload})
        case SET_TASKS + "_PENDING":
            return {
                error: false,
                loading: true,
                tasks: state.tasks,
                selectedTask: state.selectedTask,
                someTask: state.someTask
            }
        case SET_TASKS + "_REJECTED":
            return {
                error: true,
                loading: false,
                tasks: state.tasks,
                selectedTask: state.selectedTask,
                someTask: state.someTask
            }
        case SET_TASKS + "_FULFILLED":
            return Object.assign({}, state, {tasks: action.payload})
        case TASK_DETAILS:
            return {
                error: false,
                loading: false,
                tasks: state.tasks,
                someTask: action.payload
            }
        default:
            return state;
    }
}

export function catchTasks(){
    const promise = axios.get("http://localhost:3005/tasks").then(response => response.data);
    return {
        type: SET_TASKS,
        payload: promise
    }
}

export function addTask(newTask){
    axios.post(`http://localhost:3005/tasks`, {
        id: tempId,
        title: newTask,
        description: "",
        completed: false
    });
    tempId++;
    return {
        type: ADD_TASK,
        payload: {title: newTask}
    }
}

export function deleteTask(badTask){
    return {
        type: REMOVE_TASK,
        payload: badTask
    }
}

export function complete(task){
   axios.put(`http://localhost:3005/tasks/${task.id}`, {
        title: task.title,
        description: task.description,
        completed: true
    });
    const promise = axios.get("http://localhost:3005/tasks").then(response => response.data);
    return {
        type: SET_TASKS,
        payload: promise
    }
}

export function updateTask(task, ktitle, kdescription){
   axios.put(`http://localhost:3005/tasks/${task.id}`, {
        title: ktitle,
        description: kdescription,
        completed: task.completed
    });
    const promise = axios.get("http://localhost:3005/tasks").then(response => response.data);
    return {
        type: UPDATE_TASK,
        payload: promise
    }
}

export function taskDetails(task){
    return{
        type: TASK_DETAILS,
        payload: task
    }
}