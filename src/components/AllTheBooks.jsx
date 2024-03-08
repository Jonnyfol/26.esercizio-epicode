import React from 'react'
import fantasyData from '../data/fantasy.json';

export default function AllTheBooks() {
  return (
    <div>

<div className="container">
      <div className="row row-cols-1 row-cols-md-3">
        {fantasyData.map((book) => (
          <div key={book.asin} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 d-flex flex-column">
              <img src={book.img} className="card-img-top" alt={book.title} style={{ maxHeight: "400px" }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <p className="card-text">Price: ${book.price}</p>
                <button className="mt-auto btn btn-primary">Aggiungi al carrello</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
