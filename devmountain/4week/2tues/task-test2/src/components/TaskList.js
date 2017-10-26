import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteTask} from '../reducer';

class TaskList extends Component {
    constructor(props){
        super(props);

        this.state = {
            finished: false,
            hiding: false,
            tempKey: 0
        };
        this.disableMe = this.disableMe.bind(this);
        this.delMe = this.delMe.bind(this);
    }
    disableMe(i){
        this.setState({
            finished: true,
            tempKey: i
        });
    }
    delMe(i){
        console.log(i);
        this.props.dispatch(deleteTask(i))
    }
    render() {
        return (
            <div className="component-box">
                <ul>
                    {
                        this.props.taskies.map((task, i) => {
                            return <li key={i} className={`${this.state.finished && this.state.tempKey === i ? 'disabled' : ""}`}>
                                <button className="delete-task" onClick={()=>this.delMe(i)}>X</button>
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

function mapStateToProps(state){
    return {
        taskies: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList);