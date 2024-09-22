// src/components/SearchBar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/itemsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search items..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
