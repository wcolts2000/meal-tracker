import React from 'react';

export default function FilterList() {
  const handleSubmit = function(event) {
    event.preventDefault();
    alert('hit');
  };
  return (
    <form id="filterList" onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Search Foods</label>
      <input type="text" placeholder="Search..." name="searchInput" />
      <button type="submit" name="submit">
        Search Now
      </button>
    </form>
  );
}
