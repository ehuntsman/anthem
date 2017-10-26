import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateTask} from '../reducer';

class TaskInfo extends Component {
    constructor(props){
        super();
        this.state = {
            userTitleInput: "",
            userDescInput: ""
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.updateIt = this.updateIt.bind(this);
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
        this.props.updateTask(task, this.state.userTitleInput, this.state.userTitleInput)
    }
    render() {
        return (
            <div>
                {this.props.someTask ? 
                    <div className="task-info-total">
                        <p>title: <input type="text" onChange={this.handleTitleChange} placeholder={this.props.someTask.title} value={this.state.userTitleInput}/></p>
                        <p>description: <input type="text" onChange={this.handleDescChange} placeholder={this.props.someTask.description} value={this.state.userDescInput}/></p>
                        <button onClick={this.updateIt(this.props.someTask)}>Update Task</button>
                    </div>
                : "click a task"}
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

export default connect(mapStateToProps, {updateTask})(TaskInfo);