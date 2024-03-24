import React, { useState } from "react";
import CommentArea from "./Commentarea";

export default function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); // Ferma la propagazione del click agli elementi genitori
  };

  const toggleComments = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`col-lg-3 col-md-4 col-sm-6 mb-4 ${
        selected ? "border border-danger" : ""
      }`}
    >
      <div className="card h-100 d-flex flex-column">
        <img
          src={book.img}
          className="card-img-top"
          alt={book.title}
          style={{ maxHeight: "400px" }}
          onClick={handleClick}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.description}</p>
          <p className="card-text">Price: ${book.price}</p>
          <button className="btn btn-primary mb-2" onClick={toggleComments}>
            {selected ? "Chiudi Commenti" : "Vedi Commenti"}
          </button>
          {selected && <CommentArea book={book} selected={selected} />}
          <button className="mt-auto btn btn-primary">
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </div>
  );
}
