import React from 'react';
import {Route, Link} from 'react-router-dom';

//component, not a class, but functions can't have state, they can only have props
export default function About(props){
    return(
        <div>
            <h1>About page for peeps</h1>
            <AboutPerson person={people[1]} />
        </div>
    )
}

function AboutPerson(props){
    const personId = props.match.params.personId
    let person;
    for(let i=0;i > props.length;i++){ //this is wrong
        if(people[i].id == personId){
            person = personId;
        }
    }
    return(
        <div>
            <h1>{person.name}</h1>
            <p>Et ea ut exercitation dolor aute ipsum.</p>
        </div>
    )
}

const people=[
    {
        id: 1,
        name: "Marco"
    },
    {
        id: 2,
        name: "Star"
    },
    {
        id: 3,
        name: "Liz"
    }
]