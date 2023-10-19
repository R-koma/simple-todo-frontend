import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewList from "../components/ReviewList";
import { Link } from "react-router-dom";

function ReviewPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await axios.get("http://localhost:3001/reviews");
      setReviews(response.data);
    }
    fetchReviews();
  }, []);

  const completeTodo = async (id) => {
    await axios.put(`http://localhost:3001/reviews/${id}/complete`);
    setReviews(reviews.filter((review) => review._id !== id));
  };

  const todoDeleteButton = async (id) => {
    await axios.delete(`http://localhost:3001/reviews/${id}`);
    setReviews(reviews.filter((review) => review._id !== id));
  };

  return (
    <div>
      <h1>Review Page</h1>
      <ReviewList
        reviews={reviews}
        onComplete={completeTodo}
        onDelete={todoDeleteButton}
      />
      <Link to="/">
        <h3>Todoページに戻る</h3>
      </Link>
    </div>
  );
}

export default ReviewPage;
