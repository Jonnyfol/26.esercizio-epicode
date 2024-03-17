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

import React from 'react';

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment._id}>
          {comment.comment}
          <button onClick={() => onDeleteComment(comment._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;

