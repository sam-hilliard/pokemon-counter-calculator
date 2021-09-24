import axios from 'axios';
import React from 'react';

import Pokemon from './Pokemon';
import TypeEffects from './TypeEffects';

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
                    <TypeEffects typeData={getTypeData()} />
                    <h2>Possible Counters</h2>
                </div>
            );
        }
    }

    function getTypeData() {
        const typeURLs = props.pokemon.types.map(obj => {
            return obj.type.url;
        });

        let typeData = [];

        typeURLs.forEach(url => {
           axios.get(url).then(res => {
                typeData.push(res.data.damage_relations);
           }).catch(err => {
               console.log(err);
           })
        });

        return typeData;
    }

    return(
        <div>
            {displayResults()}
        </div>
    );
}

export default CounterResults;