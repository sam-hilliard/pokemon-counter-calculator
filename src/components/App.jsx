import React from 'react';
import { useState } from 'react';

import axios from 'axios';

import Heading from './Heading';
import SearchBar from './SearchBar';
import CounterResults from './CounterResults'
import Selector from './Selector';
import TypeSelector from './TypeSelector';

function App() {

    const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
    const [pokemon, setPokemon] = useState({});
    const [isPokemon, setIsPokemon] = useState(true);

    async function handleQuery(query) {
        // FIXME: use isLoading state here

        await axios.get(baseURL + query.toLowerCase()).then(res => {
            setPokemon(res.data);
        }).catch(() => {
            setPokemon({error: `Could not find pokemon with name, "${query}."`});
        });
    }

    function handleSelection(choice) {
        setIsPokemon(choice);
    }

    return (
        <div>
            <Heading />
            {isPokemon ? <SearchBar onQuery={handleQuery} /> : <TypeSelector />}
            <Selector onSelect={handleSelection} />
            {Object.entries(pokemon).length > 0 && <CounterResults pokemon={pokemon} />}
        </div>
    );
}

export default App;