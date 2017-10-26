import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteTask, catchTasks, complete, taskDetails} from '../reducer';

class TaskList extends Component {
    constructor(props){
        super(props);
        this.deleteTask = this.props.deleteTask.bind(this);
        this.taskDetails = this.props.taskDetails.bind(this);
        this.complete = this.props.complete.bind(this);
    }
    componentDidMount(){
        this.props.catchTasks()
    }
    render() {
        return (
            <div className="task-list-container">
                <ul>
                    {
                        this.props.tasks.map((task) => {
                            if(task.completed === true){
                                return <li key={task.id} className="completed">
                                    <p onClick={() => this.taskDetails(task)}>{task.title}</p>
                                    <button className="delete-task" style={{"color": "red"}} onClick={()=>this.deleteTask(task.id)}>X</button>
                                    <button disabled className="complete-task" onClick={()=>this.complete(task)}>complete ✔</button>
                                </li>
                            }else{
                                return <li key={task.id}>
                                    <p onClick={() => this.taskDetails(task)}>{task.title}</p>
                                    <button className="delete-task" style={{"color": "red"}} onClick={()=>this.deleteTask(task.id)}>X</button>
                                    <button className="complete-task" onClick={()=>this.complete(task)}>complete ✔</button>
                                </li>
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks,
        error: state.error,
        loading: state.loading,
        someTask: state.someTask
    }
}

export default connect(mapStateToProps, {catchTasks, deleteTask, complete, taskDetails})(TaskList);