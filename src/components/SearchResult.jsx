export default function SearchResult(props) {
    return(
        <div className="search-result">
            <div className="poke-pic">
                <img src={props.image} alt={props.name} />
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    );
}