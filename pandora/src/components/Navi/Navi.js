import React, { Component } from 'react';
import './navi.css';
import {Link} from 'react-router-dom';

import wtxLogo from './wavetronix-logo.png';

class Navi extends Component {
    render() {
        return (
            <div className="navi-container">
                <a className="navi-button">
                    <Link to="/">home</Link>
                </a>
                <a className="navi-button">
                    <Link to="world">world</Link>
                </a>
                <a className="navi-button">
                    <Link to="map">map</Link>
                </a>
                <div className="wtx-logo">
                    <img src={wtxLogo} />
                </div>
            </div>
        );
    }
}

export default Navi;