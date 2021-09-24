import React from 'react';
import { parseTypes } from '../typeParser';

function Pokemon(props) {

    return (
        <div>
            <p>{props.name}</p>
            <img alt={props.name + ' image'} src={props.image} />
            <p>{parseTypes(props.types)}</p>
        </div>
    );
}

export default Pokemon;