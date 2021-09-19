import React from 'react';
import { useState } from 'react';

function SearchBar() {

    const [query, setQuery] = useState('');

    function handleClick() {
        console.log(query);
        setQuery('');
    }

    function handleChange(event) {
        setQuery(event.target.value);
    }

    return (
        <div>
            <input type="text" value={query} onChange={handleChange} placeholder="Pokemon's Name" />
            <button type="button" onClick={handleClick} className="btn btn-primary">Calculate</button>
        </div>
    );

}

export default SearchBar;