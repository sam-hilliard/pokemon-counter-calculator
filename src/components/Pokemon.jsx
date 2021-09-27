import React from 'react';

import Card from 'react-bootstrap/Card';

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
        <Card className="text-center">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{parseTypes(props.types)}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Pokemon;