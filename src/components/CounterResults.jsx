import React from 'react';

import Pokemon from './Pokemon';

function CounterResults(props) {

    function displayPokemon() {
        if (props.pokemon.hasOwnProperty('error')) {
            return <p>{props.pokemon.error}</p>
        } else {
            return(
                <Pokemon 
                    name={props.pokemon.name}
                    image={props.pokemon.sprites.front_default}
                    types={props.pokemon.types}
                />
            );
        }
    }

    return(
        <div>
            {displayPokemon()}
        </div>
    );
}

export default CounterResults;