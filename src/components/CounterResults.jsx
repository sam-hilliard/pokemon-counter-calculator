import axios from 'axios';
import React from 'react';
import {useEffect, useState } from 'react';

import Pokemon from './Pokemon';
import TypeEffects from './TypeEffects';

function CounterResults(props) {

    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        // FIXME: find a way to make this call when a new pokemon is queried
        setTypeData([]);

        if (props.pokemon.types) {
            const typeURLs = props.pokemon.types.map(obj => {
                return obj.type.url;
            });

            typeURLs.forEach(url => {
                axios.get(url).then(res => {
                        setTypeData(oldData => [...oldData, res.data.damage_relations]);
                }).catch(err => {
                    console.log(err);
                });
            });
        }
    }, [props.pokemon.types]);


    if (props.pokemon.hasOwnProperty('error')) {
        return <p>{props.pokemon.error}</p>
    }

    return(
        <div>
            <Pokemon 
                name={props.pokemon.name}
                image={props.pokemon.sprites.front_default}
                types={props.pokemon.types}
            />
            {typeData.length > 0 && <TypeEffects typeData={typeData} />}
            <h2>Possible Counters</h2>
        </div>
    );
}

export default CounterResults;