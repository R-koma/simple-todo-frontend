import React from "react";

function ReviewList({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review._id}>{review.title}</li>
      ))}
    </ul>
  );
}

export default ReviewList;
