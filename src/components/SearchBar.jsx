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


    useEffect(() => {
        const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

        axios.get(baseURL).then(res => {
            // setAllPokemon(res.data.results);
            res.data.results.forEach(pokemon => {
                axios.get(pokemon.url).then(res => {
                    setAllPokemon(prevPokemon => {
                        return [{name: res.data.name, image: res.data.sprites.front_default}, ...prevPokemon];
                    });
                });
            });
        });

    }, []);


    function handleChange(event) {
        let curQuery = event.target.value;
        setQuery(curQuery);
        setSuggestedPokemon([]);

        allPokemon.forEach(pokemon => {
            if (pokemon.name.startsWith(curQuery.toLowerCase())) {
                setSuggestedPokemon(prevPokemon => [pokemon, ...prevPokemon]);
            }
        });
    }

    function handleClick() {
        if (query !== null && /\S/.test(query))
            props.onSubmit(query);
        setQuery('');
    }


    return (
        <div className="search">
            <input type="text" value={query} onChange={handleChange} placeholder="Pokemon's Name" />
            <SearchResultsDropDown results={suggestedPokemon} />
            <Button className="calculate-btn" onClick={handleClick}>Calculate</Button>
        </div>
    );

}

export default SearchBar;