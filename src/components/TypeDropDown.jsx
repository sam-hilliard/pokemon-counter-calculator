import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

function TypeDropDown(props) {

    const [types, setTypes] = useState([]);
    const [selected, setSelected] = useState('none');
    
    useEffect(() => {
        let isMounted = true;
        axios.get('https://pokeapi.co/api/v2/type')
            .then((res) => {
                if (isMounted) {
                    setTypes(res.data.results.map(type => {
                        return type.name;
                    }));
                }
            }).catch((err) => {
                console.log(err);
            });
        return () => { isMounted = false};
    }, []);

    function handleClick(e) {
        e.preventDefault();
        setSelected(e.target.text);
        props.onSelect(props.name, e.target.text);
    }

    return (
            <Dropdown>
            <Dropdown.Toggle variant="light">
                {selected}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleClick}>none</Dropdown.Item>
                <Dropdown.Divider />
                {types.map(type => {
                    return <Dropdown.Item key={type} onClick={handleClick}>{type}</Dropdown.Item>
                })}
            </Dropdown.Menu>
            </Dropdown>
    );

}

export default TypeDropDown;