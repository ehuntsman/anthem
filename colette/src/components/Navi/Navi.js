import React, { Component } from 'react';
import './navi.css';
import {Link} from 'react-router-dom';

import homeImg from '../../images/home-01.svg';
import twitter from '../../images/twitter-01.svg';
import instagram from '../../images/instagram-01.svg';
import tumblr from '../../images/tumblr-01.svg';
import patreon from '../../images/patreon-01.svg';

class Navi extends Component {
  render() {
    return (
      <nav>
        <div className="main-nav">
          <ul>
            <li><Link to="/comics">Comic</Link></li>
            <li>Characters</li>
            <li>Lumina</li>
            <li>Gallery</li>
            <li>Shop</li>
            <li>About</li>
          </ul>
        </div>
        <div className="sidebar-nav">
          <ul>
            <li>
              <Link to="/"><img src={homeImg} alt="home" /></Link>
            </li>
            <li>
              <a href="https://twitter.com/lalalettie"><img src={twitter} alt="twitter" /></a>
            </li>
            <li>
              <a href="https://stasis-comic.tumblr.com"><img src={tumblr} alt="tumblr" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/lettie_bug"><img src={instagram} alt="facebook" /></a>
            </li>
            <li>
              <img src={patreon} alt="patreon" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navi;