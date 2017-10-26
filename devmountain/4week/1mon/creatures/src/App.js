import React, { Component } from 'react';
import logo from './logo.svg';
import CreatureList from './components/CreatureList';
import CreatureBox from './components/CreatureBox';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      creatures: ["unicorn", "troll", "dragon", "centaur"],
    }
    this.addCreature = this.addCreature.bind(this);
  }
  addCreature(userInput){
    this.setState({
      creatures: [...this.state.creatures, userInput],
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CreatureBox addCreature={this.addCreature}/>
        </div>
        <p className="App-intro">
          <CreatureList creatures={this.state.creatures}/>
        </p>
      </div>
    );
  }
}

export default App;
