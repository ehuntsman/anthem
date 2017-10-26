import React from 'react';

import {dispatchGetPokemon} from './workspaceService';

export default function Pokemon({id, name, type}){
    return(
        <div className="Pokemon-listName">
            <span onClick={() => dispatchGetPokemon(id)}>{name}</span>
        </div>
    )
}