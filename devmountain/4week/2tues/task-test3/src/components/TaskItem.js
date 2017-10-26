import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateTask, catchTasks} from '../reducer';

class TaskItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            userTitleInput: "",
            userDescInput: ""
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.updateIt = this.updateIt.bind(this);
    }

    componentDidMount() {
        this.props.catchTasks()
    }

    handleTitleChange(e){
        this.setState({
            userTitleInput: e.target.value
        })
    }
    handleDescChange(e){
        this.setState({
            userDescInput: e.target.value
        })
    }
    updateIt(task){
        this.props.updateTask(task, this.state.userTitleInput, this.state.userDescInput);
        this.setState({
            userTitleInput: "",
            userDescInput: ""
        });
        this.props.catchTasks();
    }
    render() {
        if(this.props.selectedTask.title){
            return(
                <div className="editing-section">
                    <h3>{this.props.selectedTask.title}</h3>
                    <p>{this.props.selectedTask.description}</p>
                    <h4>Update</h4>
                    <p>title: <input type="text" onChange={this.handleTitleChange} placeholder="title" value={this.state.userTitleInput}/></p>
                    <p>description: <input type="text" onChange={this.handleDescChange} placeholder="description" value={this.state.userDescInput}/></p>
                    <button onClick={ () => {this.updateIt(this.props.selectedTask)} }>Update Task</button>
                </div>
            )
        }else{
            return (
                <div>
                    <p>Select a task to see information</p>
                </div>
            );
        }
    }
}

function mapStateToProps(state){
    return {
        taskies: state.tasks,
        selectedTask: state.selectedTask
    }
}

export default connect(mapStateToProps, {updateTask, catchTasks})(TaskItem);
