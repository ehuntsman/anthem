import React, { Component } from 'react';

class BestieBox extends Component {
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
        const {
            addBestie
        } = this.props;
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <button onClick={()=>addBestie(this.state.userInput)}>add a bestie</button>
            </div>
        );
    }
}

export default BestieBox;