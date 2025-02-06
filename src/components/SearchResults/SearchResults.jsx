import "./SearchResults.css";
import PropTypes from "prop-types";

import Tracklist from "../Tracklist/Tracklist";

const SearchResults = ({ searchResults, onAdd }) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist
                tracks={searchResults}
                isRemoval={false}
                onAdd={onAdd}
            />
        </div>
    );
};

SearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
}

export default SearchResults;