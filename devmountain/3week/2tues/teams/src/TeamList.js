import React, {Component} from 'react'

export default class TeamList extends Component {
    render(){
        return(
            <ul>
                {
                this.props.names.map((playername) => {return <li>{playername}</li>})
                }
            </ul>
        )
    }
}