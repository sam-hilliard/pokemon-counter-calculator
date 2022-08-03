import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

import SearchResultsDropDown from './SearchResultsDropDown';

import '../css/SearchBar.css';

// used to query a pokemon by name
function SearchBar(props) {
    const [query, setQuery] = useState('');
    const [allPokemon, setAllPokemon] = useState([]);
    const [suggestedPokemon, setSuggestedPokemon] = useState([]);

    const resultsLimit = 10;


    useEffect(() => {
        const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=500';
        setAllPokemon([]);

        axios.get(baseURL).then(res => {
            setAllPokemon(res.data.results);
        });

    }, []);


    function handleChange(event) {
        let curQuery = event.target.value;
        setQuery(curQuery);
        setSuggestedPokemon([]);

        let count = 0;
        let index = 0;

        while (index < allPokemon.length && count < resultsLimit) {
            let pokemon = allPokemon[index];
            if (pokemon.name.startsWith(curQuery.toLowerCase())) {
                count++;
                setSuggestedPokemon(prevPokemon => [pokemon, ...prevPokemon]);
            }

            index++;
        }
    }

    function handleClick() {
        if (query !== null && /\S/.test(query)) {
            props.onSubmit(query);
        }
        setQuery('');
    }


    return (
        <div className="search">
            <input type="text" value={query} onChange={handleChange} placeholder="Pokemon's Name" />
            {query !== '' && <SearchResultsDropDown results={suggestedPokemon} />}
            <Button className="calculate-btn" onClick={handleClick}>Calculate</Button>
        </div>
    );

}

export default SearchBar;