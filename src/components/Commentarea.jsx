import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

export default function CommentArea({ book, selected }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${book.asin}/comments`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWVlMTljNDM3MDAwMTkzYzM3NGEiLCJpYXQiOjE3MTA1MzA0OTksImV4cCI6MTcxMTc0MDA5OX0.UHClt_auOqxu0GAKX0s3tOPI-pf-4NFNJXoHT1NoPbY",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error(
          "Errore durante il fetch dei commenti:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Errore durante il fetch dei commenti:", error);
    }
  };

  useEffect(() => {
    // Effettua il fetch dei commenti solo se selected è true
    if (selected) {
      fetchComments();
    }
  }, [book.asin, selected]); // Dipendenze di useEffect

  const handleAddComment = async (commentData) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWVlMTljNDM3MDAwMTkzYzM3NGEiLCJpYXQiOjE3MTA1MzA0OTksImV4cCI6MTcxMTc0MDA5OX0.UHClt_auOqxu0GAKX0s3tOPI-pf-4NFNJXoHT1NoPbY",
          },
          body: JSON.stringify({
            ...commentData,
            elementId: book.asin,
          }),
        }
      );

      if (response.ok) {
        fetchComments(); // Aggiorna i commenti dopo aver aggiunto uno nuovo
      } else {
        console.error(
          "Errore durante l'invio del commento:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Errore durante l'invio del commento:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWVlMTljNDM3MDAwMTkzYzM3NGEiLCJpYXQiOjE3MTA1MzA0OTksImV4cCI6MTcxMTc0MDA5OX0.UHClt_auOqxu0GAKX0s3tOPI-pf-4NFNJXoHT1NoPbY",
          },
        }
      );

      if (response.ok) {
        fetchComments(); // Aggiorna i commenti dopo aver eliminato uno
      } else {
        console.error(
          "Errore durante l'eliminazione del commento:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Errore durante l'eliminazione del commento:", error);
    }
  };

  return (
    selected && (
      <div>
        <h3>Comments</h3>
        <CommentList
          comments={comments}
          onDeleteComment={handleDeleteComment}
        />
        <AddComment bookAsin={book.asin} onAddComment={handleAddComment} />
      </div>
    )
  );
}
