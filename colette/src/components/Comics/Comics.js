import React, { Component } from 'react';
import axios from 'axios';
import './comic.css';

import Volume from './Volume';

class Comics extends Component {
  constructor(props){
    super(props);
    this.state = {
      volumes: []
    }
  }

  componentDidMount(){
    axios.get("/api/volumes")
    .then(response => 
      this.setState({
        volumes: response.data
      })
    );
  }

  render() {
    console.log(this.state, "STATE")
    return (
      <div>
        <nav className="comic-nav">
          <ul>
            {this.state.volumes.map( (volume, index) => {
              return(
                <li>{volume.volume_name}</li>
              )
            })}
          </ul>
        </nav>
        <div className="comics-container">
          <h1>Comics</h1>
          {this.state.volumes.map( (volume, index) => {
            return(
              <div>
                <h3>{volume.volume_name}</h3>
                <Volume />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Comics;