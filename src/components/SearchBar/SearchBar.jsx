import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const search = useCallback(() => {
        onSearch(searchTerm);
    }, [onSearch, searchTerm]);

    return (
        <div className="SearchBar">
            <input
                placeholder="Enter A Song Title"
                onChange={handleSearchTermChange}
            />
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default SearchBar;