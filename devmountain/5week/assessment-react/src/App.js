import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import TaskInfo from './components/TaskInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tasks-container">
          <TaskInput />
          <TaskList tasks={this.props.tasks}/>
        </div>
        <div className="task-info-container">
          <TaskInfo someTask={this.props.someTask} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    error: state.error,
    loading: state.loading,
    tasks: state.tasks,
    someTask: state.someTask
  }
}

export default connect(mapStateToProps)(App);
