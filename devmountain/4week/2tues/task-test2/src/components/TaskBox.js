import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTask} from '../reducer';

class TaskBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.addT = this.addT.bind(this);
    }
    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }
    addT() {
        this.props.addTask(this.state.userInput)
    }
    render() {
        return (
            <div className="add-task-container">
                <input type="text" onChange={this.handleChange} placeholder="enter new task here" value={this.state.userInput}/>
                <button onClick={this.addT}>Add a Task</button>
            </div>
        );
    }
}


export default connect(null, {addTask: addTask})(TaskBox);