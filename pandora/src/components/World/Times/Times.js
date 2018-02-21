import React, { Component } from 'react';
import './times.css';

class Times extends Component {
  render() {
    return (
      <div className="world-time-part">
        <div className="time-image">
        </div>
        <div className="time-text">
          <div className="time-time">
            11:32
          </div>
          <div className="time-location">
            Provo, Utah
          </div>
        </div>
      </div>
    );
  }
}

export default Times;