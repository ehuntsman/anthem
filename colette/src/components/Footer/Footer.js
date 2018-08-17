import React, { Component } from 'react';
import './footer.css';
import footerImage from '../../images/bottom-footer-image.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-large-image">
            <img src={footerImage} alt="footer image" />
          </div>
          <div className="twitter-feed">
            <a className="twitter-timeline" href="https://twitter.com/LaLaLettie" data-tweet-limit="3" data-chrome="nofooter">Tweets by LaLaLettie</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
        <div className="footer-base">
          <div className="color-overlay"></div>
        </div>
      </footer>
    );
  }
}

export default Footer;