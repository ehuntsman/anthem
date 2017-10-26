import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteTask, catchTasks, selectTask, completeTask} from '../reducer';

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "",
        }
        this.disableMe = this.disableMe.bind(this);
        this.deleted = this.deleted.bind(this);
    }
    componentDidMount(){
        this.props.catchTasks()
    }
    disableMe(task){
        this.props.completeTask(task);
        this.props.catchTasks()
    }
    deleted(task){
        this.props.deleteTask(task);
        this.props.catchTasks()
    }
    render() {
        return (
            <ul>
                {
                    this.props.taskies.map((task) => {
                        return <li key={task.id} className={task.completed ? "disabled task-item" : "task-item"}>
                            <button className="complete-task" disabled={task.completed} onClick={()=>this.disableMe(task)}>✔</button>
                            <div className="select-me" disabled={task.completed} onClick={ () => this.props.selectTask(task) }>
                                <p>{task.title}</p><small>{this.state.selected}</small>
                            </div>
                            <button className="delete-task" onClick={ () => this.deleted(task) }>X</button>
                        </li>
                    })
                }
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        taskies: state.tasks,
        error: state.error,
        loading: state.loading,
        selectedTask: state.selectedTask
    }
}

export default connect(mapStateToProps, {catchTasks, deleteTask, selectTask, completeTask})(TaskList);