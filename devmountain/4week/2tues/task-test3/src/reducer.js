import axios from 'axios';

const initialState = {
    error: false,
    loading: false,
    tasks: ["do a little diddy", "watch Doctor Who", "p0wn da n00bs", "bake a pretty cake", "do the cooking by the book"],
    selectedTask: {},
}

const SET_TASKS = "SET_TASKS";
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const SET_ONE_TASK = "SET_ONE_TASK";
const UPDATE_TASK = "UPDATE_TASK";

export default function reducer(state=initialState, action){
    switch(action.type){
        case ADD_TASK:
            return{
                error: false,
                loading: false,
                tasks: [...state.tasks, action.payload],
                selectedTask: state.selectedTask
            }
        case REMOVE_TASK + "_PENDING":
            return {
                error: false,
                loading: true,
                tasks: state.tasks,
                selectedTask: state.selectedTask
            }
        case REMOVE_TASK + "_REJECTED":
            return {
                error: true,
                loading: false,
                tasks: state.tasks,
                selectedTask: state.selectedTask
            }
        case REMOVE_TASK + "_FULFILLED":
            return Object.assign({}, state, {tasks: action.payload})
        case SET_TASKS + "_PENDING":
            return {
                error: false,
                loading: true,
                tasks: state.tasks,
                selectedTask: state.selectedTask
            }
        case SET_TASKS + "_REJECTED":
            return {
                error: true,
                loading: false,
                tasks: state.tasks,
                selectedTask: state.selectedTask
            }
        case SET_TASKS + "_FULFILLED":
            return Object.assign({}, state, {tasks: action.payload})
        case UPDATE_TASK + "_PENDING":
            return {
                error: false,
                loading: true,
                tasks: state.tasks,
                selectedTask: state.selectedTask
            }
        case UPDATE_TASK + "_REJECTED":
            return {
                error: true,
                loading: false,
                tasks: state.tasks,
                selectedTask: state.selectedTask
            }
        case UPDATE_TASK + "_FULFILLED":
            return Object.assign({}, state, {tasks: action.payload})
        case SET_ONE_TASK:
            return Object.assign({}, state, {selectedTask: action.payload})
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

export function selectTask(taskie){
    return {
        type: SET_ONE_TASK,
        payload: taskie
    }    
}

export function addTask(newTask){
    axios.post(`http://localhost:3005/tasks`, {
        title: newTask,
        description: "",
        completed: false
    });
    return {
        type: ADD_TASK,
        payload: {title: newTask}
    }
}

export function deleteTask(taskid){
    axios.delete(`http://localhost:3005/tasks/${taskid.id}`).then(response => response.data);
    const promise = axios.get("http://localhost:3005/tasks").then(response => response.data);
    return {
        type: REMOVE_TASK,
        payload: promise
    }
}

export function completeTask(task){
    console.log(task, "task to be completed")
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
    console.log(task, "updated me")
   axios.patch(`http://localhost:3005/tasks/${task.id}`, {
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