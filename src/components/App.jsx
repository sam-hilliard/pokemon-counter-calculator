import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Heading from './Heading';
import SearchBar from './SearchBar';
import CounterResults from './CounterResults'
import Selector from './Selector';
import TypeSelector from './TypeSelector';

function App() {

    const baseURL = 'https://pokeapi.co/api/v2/';
    const [pokemon, setPokemon] = useState({});
    const [types, setTypes] = useState([]);
    const [isPokemon, setIsPokemon] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    function handleQuery(query) {
        setIsLoading(true);

        if(isPokemon) {
            queryByName(query);
        } else {
            queryByType(query);
        }

        setIsLoading(false);
    }

    function handleSelection(choice) {
        setIsPokemon(choice);
    }

    async function queryByName(query) {
        await axios.get(baseURL + 'pokemon/' + query.toLowerCase()).then(res => {
            setPokemon(res.data);
        }).catch(() => {
            setPokemon({error: `Could not find pokemon with name, "${query}."`});
        });
    }

    async function queryByType(query) {

    }

    return (
        <div>
            <Heading />
            {isPokemon ? <SearchBar onSubmit={handleQuery} /> : <TypeSelector onSubmit={handleQuery}/>}
            <Selector onSelect={handleSelection} />
            {!isLoading && <CounterResults pokemon={pokemon} types={types} isPokemon={isPokemon} />}
        </div>
    );
}

export default App;