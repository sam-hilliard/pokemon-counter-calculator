import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';

import Heading from './Heading';
import SearchBar from './SearchBar';
import CounterResults from './CounterResults'
import Selector from './Selector';
import TypeSelector from './TypeSelector';
import Loading from './Loading';
import Footer from './Footer';

import '../css/App.css';

// main application/parent of all components
function App() {

    const baseURL = 'https://pokeapi.co/api/v2/';
    const [pokemon, setPokemon] = useState({});
    const [typeData, setTypeData] = useState([]);
    const [isPokemon, setIsPokemon] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [queryMade, setQueryMade] = useState(false);

    // triggers when calc button clicked
    function handleQuery(query) {
        setIsLoading(true);

        if(isPokemon) {
            queryByName(query);
        } else {
            queryByType(query);
        }
    }

    // triggers when user changes query type using radio buttons
    function handleSelection(choice) {
        setIsPokemon(choice);
        setQueryMade(false);
    }

    // handling query based on pokemon name
    async function queryByName(query) {
        setTypeData([]);
        await axios.get(baseURL + 'pokemon/' + query.toLowerCase()).then(res => {
            setPokemon(res.data);
            const typeURLs = res.data.types.map(obj => {
                return obj.type.url;
            });
    
            typeURLs.forEach(url => {
                axios.get(url).then(res => {
                    setTypeData(oldData => [...oldData, res.data.damage_relations]);
                }).catch(() => {
                    setTypeData(oldData => [...oldData, {error: `Could not find type with name, "${query}."`}]);
                });
            });
        }).catch(() => {
            setPokemon({error: `Could not find pokemon with name, "${query}."`});
        });

        setIsLoading(false);
        setQueryMade(true);
    }

    // handling query based on using type selection
    async function queryByType(query) {
        setTypeData([]);

        // removing duplicates
        query = [...new Set(query)];

        query.forEach(type => {
            if (type !== 'none') {
                axios.get(baseURL + 'type/' + type).then(res => {
                    setTypeData(oldData => [...oldData, res.data.damage_relations]);
                }).catch(() => {
                    setTypeData(oldData => [...oldData, {error: `Could not find type with name, "${query}."`}]);
                });
            }
        });
        setIsLoading(false);
        setQueryMade(true);
    }
    
    return (
        <div>
            <Heading />
            <div className="centered">
                {isPokemon ? <SearchBar onSubmit={handleQuery} /> : <TypeSelector onSubmit={handleQuery}/>}
                <Selector onSelect={handleSelection} />

                {/* only want to render results after finished loading/query has been made */}
                {!isLoading && queryMade &&
                    <CounterResults 
                        pokemon={pokemon} 
                        typeData={typeData} 
                        isPokemon={isPokemon} 
                    />
                }

                {isLoading && <Loading />}
            </div>
            <Footer />
        </div>
    );
}

export default App;