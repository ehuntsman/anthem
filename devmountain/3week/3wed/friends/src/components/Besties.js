import React, {Component} from 'react';

export default class Besties extends Component {
    render(){
        
        return(
            <div>
                <ul>
                    {
                        this.props.besties.map((best) => {
                            return <li>{best}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}