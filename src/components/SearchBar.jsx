import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function SearchBar(props) {
    const [query, setQuery] = useState('');

    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleClick() {
        if (query !== null && /\S/.test(query))
            props.onSubmit(query);
        setQuery('');
    }

    return (
        <div>
            <input type="text" value={query} onChange={handleChange} placeholder="Pokemon's Name" />
            <Button onClick={handleClick}>Calculate</Button>
        </div>
    );

}

export default SearchBar;