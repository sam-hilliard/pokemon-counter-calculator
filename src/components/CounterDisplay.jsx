import React from 'react';

import Card from 'react-bootstrap/Card';

import '../css/CounterDisplay.css'

// displays counter data in a card
function CounterDisplay(props) {
    return (
        <Card className={'mb-2 ' + (props.isAttack ? 'attack' : 'defense')} style={{ width: '18rem', margin: '0 auto' }}>
            <Card.Header >{props.isAttack ? 'Attack' : 'Defense'} Counters</Card.Header>
            <Card.Body>
            <Card.Text>
                <p>{props.isAttack ? 'Super' : 'Not Very'} Effective: {props.counters}</p>
                {props.doubleCounters.length > 0 && <p>2x {!props.isAttack && 'Not'} Effective: {props.doubleCounters}</p>}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CounterDisplay;