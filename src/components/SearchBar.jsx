import React from 'react';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';


function SearchBar(props) {
    const [query, setQuery] = useState('')

    async function handleClick() {
        props.onQuery(query);
        setQuery('');
    }

    function handleChange(event) {
        setQuery(event.target.value);
    }

    return (
        <div>
            <input type="text" value={query} onChange={handleChange} placeholder="Pokemon's Name" />
            <Button onClick={handleClick} >Calculate</Button>
        </div>
    );

}

export default SearchBar;