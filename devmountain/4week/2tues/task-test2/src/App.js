import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

import TaskBox from './components/TaskBox';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo List <small>the reduxxxxxx</small></h2>
        </div>
        
        <TaskBox />

        <div style={{"color": "white", fontSize: "20px"}}>
          <TaskList tasks={this.props.tasks}/>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps)(App);
