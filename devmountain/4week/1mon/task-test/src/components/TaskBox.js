import React, { Component } from 'react';

class TaskBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }
    addT(task) {
        this.setState({
            userInput: ""
        })
        this.props.addTask(task);
    }
    render() {
        return (
            <div className="add-task-container">
                <input type="text" onChange={this.handleChange} placeholder="enter new task here" value={this.state.userInput}/>
                <button onClick={()=>this.addT(this.state.userInput)}>Add a Task</button>
            </div>
        );
    }
}

export default TaskBox;