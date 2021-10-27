import React from 'react';


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
            <h3>Attack Counters</h3>
            <p>Super Effective: {getCounters(true).counters}</p>
            {getCounters(true).counters2x.length > 0 && <p>2x Effective: {getCounters(true).counters2x}</p>}

            <h3>Defense Counters</h3>
            <p>Not Very Effective: {getCounters(false).counters}</p>
            {getCounters(false).counters2x.length > 0 && <p>2x Not Effective: {getCounters(false).counters2x}</p>}
        </div>
    )
}

export default TypeEffects;