import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link da react-router-dom

const SingleBook = ({ setSelected, selected, book }) => {
  return (
    <>
      <Card
        onClick={() => setSelected(book.asin)}
        style={{
          border: selected === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
          {/* Aggiungi il pulsante per navigare a BookDetails */}
          <Link to={`/book/${book.asin}`}>
            <Button variant="primary">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
