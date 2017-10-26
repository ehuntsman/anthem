import React, {Component} from 'react';
import {connect} from "react-redux";

import {dispatchGetList} from './listService';

import Pokemon from './Pokemon';

class List extends Component{
    componentDidMount(){
        dispatchGetList();
    }
    render(){
        const {
            loading,
            pokemonList,
        } = this.props;
        const PokemonComponents = pokemonList.map(pokemon => (
            <Pokemon
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
            />
        ));
        return(
            <div id="Pokemon-container">
                {
                    loading
                    ?
                    <p>Fetching Pokemon...</p>
                    :
                    <div id="Pokemon-name-container">
                        {PokemonComponents}
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    state = state.listReducer;
    return state;
}

export default connect(mapStateToProps)(List);