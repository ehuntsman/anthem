import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navi from './components/Navi/Navi';
import router from './router';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        {router}
        <Footer />
      </div>
    );
  }
}

export default App;