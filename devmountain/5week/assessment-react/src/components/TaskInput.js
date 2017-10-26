import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTask} from '../reducer';

class TaskInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.addIt = this.addIt.bind(this);
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }
    addIt(){
        this.props.addTask(this.state.userInput)
    }

    render() {
        return (
            <div className="task-input-container">
                <h1>TO-DO:</h1>
                <input type="text" onChange={this.handleChange} placeholder="enter new task here" value={this.state.userInput}/>
                <button onClick={this.addIt}>Add a Task</button>
            </div>
        );
    }
}

export default connect(null, {addTask: addTask})(TaskInput);