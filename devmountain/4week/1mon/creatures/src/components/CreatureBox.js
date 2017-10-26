import React, { Component } from 'react';

class CreatureBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>Creature List</h2>
                <input type="text" onChange={this.handleChange} />
                <button onClick={()=>this.props.addCreature(this.state.userInput)}>Add a Creature</button>
            </div>
        );
    }
}

export default CreatureBox;