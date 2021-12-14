import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CounterDisplay from './CounterDisplay';

function TypeEffects(props) {

    function getCounters(isAttack) {
        let counters = '';
        let counters2x = '';
        props.typeData.forEach(type => {
            let counterData = isAttack ? type.double_damage_from : type.half_damage_to;
            counterData.forEach(counterObj => {
                let counter = counterObj.name;
                if (counters.includes(counter)) {
                    counters2x += counter + ', ';
                    counters.replace(counter + ', ', '');
                } else {
                    counters += counter +  ', ';
                }
            });
        });

        counters = counters.replace(new RegExp(', $'), '');
        counters2x = counters2x.replace(new RegExp(', $'), '');
        return {counters: counters, counters2x: counters2x}
    }

    return (
        <div>
            <Container>
                <Row xs={1} sm={1} md={2}>
                    <Col>
                        <CounterDisplay 
                            isAttack={true}
                            counters={getCounters(true).counters}
                            doubleCounters={getCounters(true).counters2x} 
                        />
                    </Col>
                    <Col>
                        <CounterDisplay 
                            isAttack={false}
                            counters={getCounters(false).counters}
                            doubleCounters={getCounters(false).counters2x} 
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TypeEffects;