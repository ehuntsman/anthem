import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          bus stop information
        </div>
        <div className="footer-center">
          weather and temp
        </div>
        <div className="footer-right">
          date time
        </div>
      </div>
    );
  }
}

export default Footer;