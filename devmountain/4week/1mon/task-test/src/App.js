import React, { Component } from 'react';
import './App.css';

import TaskBox from './components/TaskBox';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: ["do a little diddy", "watch Doctor Who", "p0wn da n00bs"],
      userInput: "",
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addTask(userInput){
    if(userInput === ""){
      return;
    }
    this.setState({
      tasks: [...this.state.tasks, userInput],
      userInput: this.userInput
    });
  }
  deleteTask(taskToDel){
    var chickenpotpie = this.state.tasks.splice(0);
    chickenpotpie.splice(taskToDel, 1);
    this.setState({
      tasks: chickenpotpie
    });
  }
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo List <small>version 7.3</small></h2>
        </div>
        
        <TaskBox addTask={this.addTask}/>

        <div style={{"color": "white", fontSize: "20px"}}>
          <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
        </div>
      </div>
    );
  }
}

export default App;
