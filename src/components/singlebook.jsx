import React, { useState } from 'react';
import './singlebook.css';

export default function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected); // Inverto quando clicco
  };

  return (
    //aggiungo la classe selected se viene cliccato
    <div className={`col-lg-3 col-md-4 col-sm-6 mb-4 single-book ${selected ? 'selected' : ''}`}> 
{/* //quando si fa clic sulla card viene chiamata la funzione handleClick */}
      <div className="card" onClick={handleClick}>
        <img src={book.img} className="card-img-top" alt={book.title} />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.description}</p>
          <p className="card-text">Price: ${book.price}</p>
          <button className="btn btn-primary mt-auto">Aggiungi al carrello</button>
        </div>
      </div>
    </div>
  );
}
