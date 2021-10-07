import React from 'react';
import { useState } from 'react';
import TypeDropDown from './TypeDropDown';

function TypeSelector() {

    const [types, setTypes] = useState([]);

    function handleSelect() {

    }

    return (
        <div>
            <TypeDropDown onSelect={handleSelect}/>
            <TypeDropDown onSelect={handleSelect}/>
        </div>
    );
}

export default TypeSelector;