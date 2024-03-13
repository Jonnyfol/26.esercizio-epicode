import React from 'react';

export default function Search({ searchText, handleSearchChange }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Cerca per titolo..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}
