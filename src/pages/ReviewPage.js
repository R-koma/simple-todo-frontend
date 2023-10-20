import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewList from "../components/ReviewList";
import Topbar from "../components/topbar/Topbar";
import "./ReviewPage.css";

function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  // console.log(reviews[0].title);
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
    <>
      <div className="topbar">
        <Topbar titleCenter="REVIEW" titleRight="Todo Page" linkRight="/" />
      </div>
      <div className="reviewPage">
        <div className="leftbar">
          <ReviewList
            reviews={reviews}
            setSelectedReview={setSelectedReview}
            onComplete={completeTodo}
            onDelete={todoDeleteButton}
          />
        </div>
        <div className="mainArea">
          {/* <MainReviewPage
            reviews={reviews}
            setSelectedReview={setSelectedReview}
          /> */}
          <div className="mainAreaInputTitle">
            {selectedReview ? selectedReview.title : ""}
          </div>
          <div className="inputAreaContainer">
            <input
              className="mainAreaInput"
              type="text"
              placeholder="キーワードを入力"
            />
            <button className="mainAreaButton">復習</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewPage;
