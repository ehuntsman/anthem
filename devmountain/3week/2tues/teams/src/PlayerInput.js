import React, { Component } from 'react'

export default class PlayerInput extends Component {
    constructor() {
        super();
        this.state = {
            playerName: ""
        }
    }

    addP(player) {
        this.setState({
            playerName: ""
        })
        this.props.addPlayer(player);
    }

    render() {
        return (
            <div>
                <input value={this.state.playerName} type="text" onChange={(e) => this.setState({ playerName: e.target.value })} />
                <button onClick={() => this.addP(this.state.playerName)}>Add</button>
            </div>
        )
    }
}