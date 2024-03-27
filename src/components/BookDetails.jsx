import React from "react";
import { useParams } from "react-router-dom";
import fantasyData from "../data/fantasy.json";

const BookDetails = () => {
  // Recupera il parametro ASIN dall'URL utilizzando useParams
  const { asin } = useParams();

  // Trova il libro corretto utilizzando il parametro ASIN
  const selectedBook = booksData.find((book) => book.asin === asin);

  // Se il libro non viene trovato, mostra un messaggio di errore
  if (!selectedBook) {
    return <div>Book not found!</div>;
  }

  // Distruggi i dettagli del libro
  const { title, img, description, reviews } = selectedBook;

  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p>{description}</p>
      <h3>Reviews:</h3>
      <ul>
        {/* Mostra le recensioni del libro */}
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
