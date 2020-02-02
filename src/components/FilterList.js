import React from 'react';
import PropTypes from 'prop-types';

export default function FilterList({ handleInput, filterInput }) {
  return (
    <form id="filterList">
      <label htmlFor="searchInput">Search Foods</label>
      <input
        type="text"
        placeholder="Search..."
        name="searchInput"
        onChange={handleInput}
        value={filterInput.searchInput}
      />
    </form>
  );
}

FilterList.propTypes = {
  handleInput: PropTypes.func.isRequired,
  filterInput: PropTypes.shape({
    searchInput: PropTypes.string.isRequired
  })
};
