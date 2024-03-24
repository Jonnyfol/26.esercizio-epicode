// import React from 'react';
// import SingleComment from './SingleComment';

// export default function CommentList({ comments }) {
//   return (
//     <div>
//       {comments.map(comment => (
//         <SingleComment key={comment._id} comment={comment} />
//       ))}
//     </div>
//   );
// }

import React from "react";

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <ul className="list-group">
      {comments.map((comment) => (
        <li
          key={comment._id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <p>{comment.comment}</p>
            <p>Rate: {comment.rate}</p>
          </div>
          <button
            onClick={() => onDeleteComment(comment._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
