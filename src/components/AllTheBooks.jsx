import React from 'react';
import SingleBook from './singlebook';

import fantasyData from '../data/fantasy.json';



export default function AllTheBooks({ searchText }) {
  const filteredBooks = fantasyData.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3">
        {filteredBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </div>
    </div>
  );
}