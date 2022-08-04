import { useEffect, useState } from 'react';

import axios from 'axios';

import '../css/SearchResult.css';

export default function SearchResult(props) {
    const [pokeImage, setPokeImage] = useState({});

    useEffect(() => {
        axios.get(props.image_url).then(res => {
            setPokeImage(res.data.sprites.front_default);
        });
    }, [props.image_url]);

    function handleClick() {
        props.onSubmit(props.name)
    }

    return(
        <div className="search-result" onClick={handleClick}>
            <div className="poke-pic">
                <img src={pokeImage} alt={props.name} />
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    );
}