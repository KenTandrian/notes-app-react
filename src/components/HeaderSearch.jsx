import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {

    const onSearchbarChange = (event) => {
        onSearch(event.target.value);
    }

    return (
        <div className="note-search">
            <SearchIcon id='search-icon' />
            <input
                type="text"
                placeholder="Search for notes..."
                onChange={onSearchbarChange}
            />

        </div>
    )
}

export default SearchBar;