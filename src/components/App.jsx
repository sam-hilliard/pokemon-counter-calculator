import React from 'react';
import { useState } from 'react';

import axios from 'axios';

import Heading from './Heading';
import SearchBar from './SearchBar';
import CounterResults from './CounterResults'

function App() {

    const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
    const [pokemon, setPokemon] = useState({});

    async function handleQuery(query) {
        await axios.get(baseURL + query.toLowerCase()).then(res => {
            setPokemon(res.data);
        }).catch(() => {
            setPokemon({error: query + ' could not be found'});
        });
    }

    return (
        <div>
            <Heading />
            <SearchBar onQuery={handleQuery} />
            {Object.entries(pokemon).length > 0 && <CounterResults pokemon={pokemon} />}
        </div>
    );
}

export default App;