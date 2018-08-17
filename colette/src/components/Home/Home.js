import React, { Component } from 'react';
import './home.css';

import News from './News';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-hero">
          </div>
        </div>
        <section className="home-body">
          <div className="updates-section">
            <h3>updates Thursdays</h3>
            <p>not on Tuesdays or bank holidays</p>
          </div>
          <div className="support-section">
            <h3>become a patreon supporter</h3>
          </div>
          <div className="news-section">
            <News/>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;