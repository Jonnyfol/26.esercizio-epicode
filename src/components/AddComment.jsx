// import React, { useState } from 'react';

// export default function AddComment({ bookAsin, fetchComments }) {
//   const [comment, setComment] = useState('');
//   const [rate, setRate] = useState(1);

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleRateChange = (event) => {
//     setRate(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
//         headers: {
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWVlMTljNDM3MDAwMTkzYzM3NGEiLCJpYXQiOjE3MTA1MzA0OTksImV4cCI6MTcxMTc0MDA5OX0.UHClt_auOqxu0GAKX0s3tOPI-pf-4NFNJXoHT1NoPbY"
//         }
//         }, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           comment,
//           rate,
//           elementId: bookAsin,
//         }),
//       });

//       if (response.ok) {
//         fetchComments();
//         setComment('');
//         setRate(1);
//       }
//     } catch (error) {
//       console.error('Error posting comment:', error);
//     }
//   };

//   return (
//     <div>
//       <h4>Add a Comment</h4>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="comment" className="form-label">Comment</label>
//           <textarea
//             className="form-control"
//             id="comment"
//             rows="3"
//             value={comment}
//             onChange={handleCommentChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="rate" className="form-label">Rate</label>
//           <select
//             className="form-select"
//             id="rate"
//             value={rate}
//             onChange={handleRateChange}
//             required
//           >
//             {[1, 2, 3, 4, 5].map(value => (
//               <option key={value} value={value}>{value}</option>
//             ))}
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';

export default function AddComment({ bookAsin, onAddComment }) {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWVlMTljNDM3MDAwMTkzYzM3NGEiLCJpYXQiOjE3MTA1MzA0OTksImV4cCI6MTcxMTc0MDA5OX0.UHClt_auOqxu0GAKX0s3tOPI-pf-4NFNJXoHT1NoPbY'
        },
        body: JSON.stringify({
          comment,
          rate,
          elementId: bookAsin,
        }),
      });

      if (response.ok) {
        const newComment = { _id: Math.random().toString(), comment, rate }; // Generiamo un ID univoco per il nuovo commento
        onAddComment(newComment); // Aggiungi il nuovo commento alla lista senza dover effettuare una nuova richiesta al server
        setComment('');
        setRate(1);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div>
      <h4>Add a Comment</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Comment</label>
          <textarea
            className="form-control"
            id="comment"
            rows="3"
            value={comment}
            onChange={handleCommentChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rate" className="form-label">Rate</label>
          <select
            className="form-select"
            id="rate"
            value={rate}
            onChange={handleRateChange}
            required
          >
            {[1, 2, 3, 4, 5].map(value => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
