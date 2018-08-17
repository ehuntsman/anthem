import React, { Component } from 'react';

class Volume extends Component {
  render() {
    return (
      <div className="volume-container">
        <div className="volume-image">
          image
        </div>
        <div className="comic-numbers-container">
          <ul>
            <li className="comic-number-box">1</li>
            <li className="comic-number-box">2</li>
            <li className="comic-number-box">3</li>
            <li className="comic-number-box">4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Volume;