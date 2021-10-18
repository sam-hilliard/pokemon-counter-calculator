import axios from 'axios';
import React from 'react';
import {useEffect, useState } from 'react';

import Pokemon from './Pokemon';
import TypeEffects from './TypeEffects';

function CounterResults(props) {
    
    const [typeData, setTypeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // FIXME: find a way to make this call when a new pokemon is queried

        setIsLoading(true);
        if (props.isPokemon && props.pokemon.types) {
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
            setIsLoading(false);
        } else {
            setTypeData(props.typeData);
            setIsLoading(false);
        }
        
    }, [props.pokemon.types, props.isPokemon, props.typeData]);

    if (props.pokemon.hasOwnProperty('error')) {
        return <p>{props.pokemon.error}</p>
    }

    return(
        <div>
            {props.isPokemon && <Pokemon 
                name={props.pokemon.name}
                image={props.pokemon.sprites.front_default}
                types={props.pokemon.types}
            />}
            <TypeEffects typeData={typeData} />
        </div>
    );
}

export default CounterResults;