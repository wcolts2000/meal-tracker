import React from 'react';
import PropTypes from 'prop-types';

export default function FilterList({ filterFoods }) {
  const handleSubmit = function(event) {
    event.preventDefault();
    alert('hit');
  };
  return (
    <form id="filterList" onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Search Foods</label>
      <input
        type="text"
        placeholder="Search..."
        name="searchInput"
        onChange={filterFoods}
      />
      <button type="submit" name="submit">
        Search Now
      </button>
    </form>
  );
}

FilterList.propTypes = {
  filterFoods: PropTypes.func.isRequired
};
