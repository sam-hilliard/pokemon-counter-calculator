import React from 'react';

import Pokemon from './Pokemon';

function CounterResults(props) {

    function displayResults() {
        if (props.pokemon.hasOwnProperty('error')) {
            return <p>{props.pokemon.error}</p>
        } else {
            return(
                <div>
                    <Pokemon 
                        name={props.pokemon.name}
                        image={props.pokemon.sprites.front_default}
                        types={props.pokemon.types}
                    />
                    <h2>Weak Against</h2>
                    <h2>Strong Against</h2>
                    <h2>Possible Counters</h2>
                </div>
            );
        }
    }

    return(
        <div>
            {displayResults()}
        </div>
    );
}

export default CounterResults;