import React from 'react';
import { useState } from 'react';

import '../css/Selector.css';

function Selector(props) {

    const [isPokemon, setIsPokemon] = useState(true);

    function handleChange(e) {
        const pokemonChecked = e.target.value === 'pokemon';
        setIsPokemon(pokemonChecked);
        props.onSelect(pokemonChecked);
    }

    return (
        <div className="selector">
            <input checked={isPokemon} type="radio" value="pokemon" id="pokemon"
              onChange={handleChange} />
            <label htmlFor="pokemon">By Pokemon</label>

            <input checked={!isPokemon} type="radio" value="type" id="type"
              onChange={handleChange} />
            <label htmlFor="type">By Type</label>
        </div>
    )
}

export default Selector;