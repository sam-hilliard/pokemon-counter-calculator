import React from 'react';

import { parseTypes } from '../typeParser';

function TypeEffects(props) {

    console.log(props.typeData);

    return (
        <div>
            <h2>Attack Counters</h2>
            <h2>Defense Counters</h2>
        </div>
    )
}

export default TypeEffects;