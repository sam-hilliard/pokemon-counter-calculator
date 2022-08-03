import { useEffect, useState } from 'react';

import axios from 'axios';

export default function SearchResult(props) {
    const [pokeImage, setPokeImage] = useState({});

    useEffect(() => {
        axios.get(props.image_url).then(res => {
            setPokeImage(res.data.sprites.front_default);
        });
    }, [props.image_url]);

    return(
        <div className="search-result">
            <div className="poke-pic">
                <img src={pokeImage} alt={props.name} />
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    );
}