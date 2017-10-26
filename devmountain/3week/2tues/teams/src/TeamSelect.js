import React, {Component} from 'react'

export default class TeamList extends Component {
    render(){
        return(
            <div className="toggle-team">
                <button className="red" onClick={() => this.props.select(1)} disable={this.props.team}>Team Red</button>
                <button className="blue"onClick={() => this.props.select(2)} disable={this.props.team}>Team Blue</button>
            </div>
        )
    }
}