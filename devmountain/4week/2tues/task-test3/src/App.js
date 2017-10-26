import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

import TaskBox from './components/TaskBox';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo List <small>the reduxxxxxx</small></h2>
        </div>
        
        <TaskBox />

        <div style={{"color": "white"}} className="component-box">
          <TaskList tasks={this.props.tasks} selectedTask={this.props.selectedTask}/>
        </div>
        <div style={{"color": "white"}} className="component-box">
          <TaskItem selectedTask={this.props.selectedTask}/>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    error: state.error,
    loading: state.loading,
    tasks: state.tasks,
    selectedTask: state.selectedTask
  }
}
export default connect(mapStateToProps)(App);
