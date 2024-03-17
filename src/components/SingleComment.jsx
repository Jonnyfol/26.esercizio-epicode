import React from 'react';
import './SingleComment.css';

export default function SingleComment({ comment, onDeleteComment }) {
  // Controllo se l'oggetto comment e l'attributo rate sono definiti
  if (!comment || typeof comment.rate === 'undefined') {
    console.error("Il commento è undefined o l'attributo rate manca.");
    return null;
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: 'DELETE',
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWVlMTljNDM3MDAwMTkzYzM3NGEiLCJpYXQiOjE3MTA1MzA0OTksImV4cCI6MTcxMTc0MDA5OX0.UHClt_auOqxu0GAKX0s3tOPI-pf-4NFNJXoHT1NoPbY"
        }
      });

      if (response.ok) {
        onDeleteComment(comment._id); // Rimuove il commento dalla UI
      } else {
        console.error('Errore durante l\'eliminazione del commento:', response.statusText);
      }
    } catch (error) {
      console.error('Errore durante l\'eliminazione del commento:', error);
    }
  };

  return (
    <div className="single-comment mb-3">
      <div className="comment-text">{comment.comment}</div>
      <div className="comment-rate">Rate: {comment.rate}</div>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  );
}






