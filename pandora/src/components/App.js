import React, { Component } from 'react';
import '../App.css';
import router from '../router'
import Navi from './Navi/Navi';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="left-navi">
          <Navi/>
        </div>
        <div className="right-router">
          {router}
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
