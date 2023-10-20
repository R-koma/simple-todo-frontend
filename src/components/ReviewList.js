import React from "react";
import "./ReviewList.css";

function ReviewList({ reviews, onComplete, onDelete, setSelectedReview }) {
  return (
    <div className="reviewList">
      <ul className="reviewListWrapper">
        {reviews.map((review) => (
          <li
            className="reviewListTitle"
            key={review._id}
            onClick={() => setSelectedReview(review)}
          >
            <input
              className="reviewCheckBox"
              type="checkbox"
              onClick={() => onComplete(review._id)}
            />
            <div className="reviewTitle">{review.title}</div>
            <button
              className="reviewDeleteButton"
              onClick={() => onDelete(review._id)}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </li>
          // <button key={review._id} onClick={() => setSelectedReview(review)}>
          //   {review.title}
          // </button>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
