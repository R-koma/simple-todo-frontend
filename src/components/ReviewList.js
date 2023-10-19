import React from "react";

function ReviewList({ reviews, onComplete, onDelete }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review._id}>
          {review.title}
          <button onClick={() => onComplete(review._id)}>Complete</button>
          <button onClick={() => onDelete(review._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;
