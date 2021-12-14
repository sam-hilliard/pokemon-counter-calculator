import React from 'react';

import Pokemon from './Pokemon';
import TypeEffects from './TypeEffects';

function CounterResults(props) {

    if (props.isPokemon && props.pokemon.hasOwnProperty('error')) {
        return(
            <h5>{props.pokemon.error}</h5>
        );
    } else {
        return(
            <div>
                {props.isPokemon && <Pokemon 
                    name={props.pokemon.name}
                    image={props.pokemon.sprites.front_default}
                    types={props.pokemon.types}
                />}
                <TypeEffects typeData={props.typeData} />
            </div>
        );
    }
}

export default CounterResults;