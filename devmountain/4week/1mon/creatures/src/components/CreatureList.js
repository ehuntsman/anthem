import React, { Component } from 'react';

class CreatureList extends Component {
    render() {
        return (
            <div>
                my creature list
                <ul>
                    {
                        this.props.creatures.map((creature) => {
                            return <li>{creature}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default CreatureList;