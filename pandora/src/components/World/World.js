import React, { Component } from 'react';
import './world.css';

import Times from './Times/Times';

class World extends Component {
  render() {
    return (
      <div className="world-container">
        <div className="world-news">
          <div className="world-news-left">
            Quick world news
          </div>
          <div className="world-news-right">
            large world news story (case study?)
          </div>
        </div>
        <div className="world-times">
          <Times/>
          <Times/>
          <Times/>
          <Times/>
          <Times/>
          <Times/>
          <Times/>
          <Times/>
        </div>
      </div>
    );
  }
}

export default World;