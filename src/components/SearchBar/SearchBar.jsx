import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleKeyDown = (e) => {
        if(e.key === "Enter" || e.keyCode === 13) {
            onSearch(searchTerm);
        }
    }

    const search = useCallback(() => {
        onSearch(searchTerm);
    }, [onSearch, searchTerm]);

    return (
        <div className="SearchBar">
            <input
                placeholder="Enter A Song Title"
                onChange={handleSearchTermChange}
                onKeyDown={handleKeyDown}
            />
            <button className="SearchButton" onClick={search}>Search</button>
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default SearchBar;