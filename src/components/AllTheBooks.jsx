import React, { useState } from 'react';
import SingleBook from './singlebook';
import Search from './Search';
import fantasyData from '../data/fantasy.json';

export default function AllTheBooks() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredBooks = fantasyData.filter((book) =>
  
book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <Search searchText={searchText} handleSearchChange={handleSearchChange} />
      <div className="row row-cols-1 row-cols-md-3">
        {filteredBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </div>
    </div>
  );
}
