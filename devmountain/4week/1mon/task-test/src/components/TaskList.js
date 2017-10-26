import React, { Component } from 'react';

class TaskList extends Component {
    constructor(props){
        super(props);

        this.state = {
            finished: false,
            hiding: false,
            tempKey: 0
        };
        this.disableMe = this.disableMe.bind(this);
    }
    disableMe(i){
        this.setState({
            finished: true,
            tempKey: i
        });
    }
    render() {
        return (
            <div className="component-box">
                <ul>
                    {
                        this.props.tasks.map((task, i) => {
                            return <li key={i} className={`${this.state.finished && this.state.tempKey === i ? 'disabled' : ""}`}>
                                <button className="delete-task" onClick={()=>this.props.deleteTask(i)}>X</button>
                                {task} 
                                <button className="complete-task" onClick={()=>this.disableMe(i)}>✔</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TaskList;