import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Besties from './components/Besties';
import BestieBox from './components/BestieBox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      besties: ["Star", "Janna", "Marco", "Heckapoo"],
    }
    this.addBestie = this.addBestie.bind(this);
  }
  addBestie(userInput){
    this.setState({
      besties: [...this.state.besties, userInput],
    })
  }
  render() {
    return (
      <div className="main-container">
        <div className="header">
          <h1>
            <img src={logo} className="App-logo" alt="logo" />
            Who are my Besties?!
            <img src={logo} className="App-logo" alt="logo" />
          </h1>
        </div>
        <Besties besties={this.state.besties}/>
        <BestieBox addBestie={this.addBestie}/>
      </div>
    );
  }
}

export default App;
