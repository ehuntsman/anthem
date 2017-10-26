import React, { Component } from 'react';
import './App.css';

import TeamList from "./TeamList"
import TeamSelect from "./TeamSelect"
import PlayerInput from "./PlayerInput"

class App extends Component {
  constructor(){
    super();

    this.state = {
      redRoster: ["Rose Tyler", "Mickey Smith", "Barry White"],
      blueRoster: ["Kida Thatch", "John Watson", "Cillian Murphy"],
      selectedTeam: 1,
      tempInput: ""
    }
    this.updateSelectedTeam = this.updateSelectedTeam.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }
  updateSelectedTeam(team){
    this.setState({
      selectedTeam: team
    })
  }
  addPlayer(player) {
    var { selectedTeam } = this.state;
    if (selectedTeam === 1) {
      var newRoster = this.state.team1Roster.slice();
      newRoster.push(player);
      this.setState({
        team1Roster: newRoster
      })
    } else {
      var newRoster = this.state.team2Roster.slice();
      newRoster.push(player);
      this.setState({
        team2Roster: newRoster
      })
    }
  }
  render() {
    return (
      <div>
        <TeamSelect select={this.updateSelectedTeam} team={this.state.selectedTeam}/>
        { this.state.selectedTeam }
        <PlayerInput team={1} addPlayer={this.addPlayer} />
        <div className="team-div red">
          <h3>Red Team</h3>
          <TeamList names={this.state.redRoster}/>
        </div>
        <div className="team-div blue">
          <h3>Blue Team</h3>
          <TeamList names={this.state.blueRoster}/>
        </div>
      </div>
    );
  }
}

export default App;
