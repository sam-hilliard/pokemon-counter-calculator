import React from 'react';
import { useState } from 'react';
import TypeDropDown from './TypeDropDown';
import Button from 'react-bootstrap/Button';

function TypeSelector(props) {

    const [types, setTypes] = useState({})

    function handleSelect(name, value) {
        if (name === 'sel1') {
            setTypes(prevType => {
                return {...prevType, type1: value}
            });
        } else {
            setTypes(prevType => {
                return {...prevType, type2: value}
            });
        }
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