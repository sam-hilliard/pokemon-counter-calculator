import React from 'react';

function Pokemon(props) {

    function parseTypes(types) {
        let typeStr = '';
    
        types.forEach(obj => {
            typeStr += obj.type.name + ', ';
        });
    
        typeStr = typeStr.replace(new RegExp(', $'), '');
        return typeStr;
    }

    return (
        <div>
            <p>{props.name}</p>
            <img alt={props.name + ' image'} src={props.image} />
            <p>{parseTypes(props.types)}</p>
        </div>
    );
}

export default Pokemon;