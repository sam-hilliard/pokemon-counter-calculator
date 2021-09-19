import React from 'react';

function CounterResults(props) {

    function displayPokemon() {
        if (props.pokemon.hasOwnProperty('error')) {
            return <p>{props.pokemon.error}</p>
        } else {
            return(
                <div>
                    <p>{props.pokemon.name}</p>
                    <img alt={props.pokemon.name + ' image'} src={props.pokemon.sprites.front_default} />
                </div>
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