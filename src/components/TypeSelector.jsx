import React from 'react';
import { useState } from 'react';
import TypeDropDown from './TypeDropDown';
import Button from 'react-bootstrap/Button';

function TypeSelector(props) {

    const [types, setTypes] = useState(['none', 'none']);

    function handleSelect(name, value) {
        let tempTypes = types;
        if (name === 'sel1') {
            tempTypes[0] = value;
        } else {
            tempTypes[1] = value;
        }

        setTypes(tempTypes);
    }

    function handleClick() {
        props.onSubmit(types);
    }

    return (
        <div>
            <TypeDropDown name='sel1' onSelect={handleSelect}/>
            <TypeDropDown name='sel2' onSelect={handleSelect}/>
            <Button onClick={handleClick}>Calculate</Button>
        </div>
    );
}

export default TypeSelector;