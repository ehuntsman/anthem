import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="roadway-news">
                    <p>This is either recent roadway news or overridden by Carrie to be news she choses. Everyday it should reset to recent. This should be a component.</p>
                </div>
                <div className="news-ticker">
                    news ticker. This should probably be a component as well.
                </div>
                <div className="main-news-breakroom-container">
                    <div className="large-news">
                        <p>To be edited by Carrie</p>
                    </div>
                    <div className="breakroom-news">
                        component that can be edited by marci/lara/kalie
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;