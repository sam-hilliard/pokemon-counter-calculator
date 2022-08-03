import SearchResult from './SearchResult';

export default function SearchResultsDropDown(props) {
    return(
        <div className="search-results">
            {props.results.map((pokemon, index) => {
                return <SearchResult key={index} name={pokemon.name} image={pokemon.image} />;
            })}
        </div>
    );
}