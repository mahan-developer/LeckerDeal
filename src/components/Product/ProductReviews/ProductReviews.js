import React, { useState, useEffect } from "react";
import "./ProductReviews.css";
import ReviewForm from "./ReviewForm/ReviewForm";
import "./ProductReviewsResponsive.css"

const ProductReviews = ({ product, language, mockUser }) => {
  const [reviews, setReviews] = useState(product.reviews);
  const [likedReviews, setLikedReviews] = useState({});
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [sortFilter, setSortFilter] = useState("latest");

  useEffect(() => {
    const initialLikes = {};
    mockUser.likedReviews.forEach(({ ReviewsId, liked, disliked }) => {
      if (liked) initialLikes[ReviewsId] = "like";
      if (disliked) initialLikes[ReviewsId] = "dislike";
    });
    setLikedReviews(initialLikes);
  }, [mockUser]);

  const handleLikeDislike = (review, type) => {
    setLikedReviews((prev) => {
      const currentStatus = prev[review.id];
      let newStatus = type;
      let newLikes = review.likes;
      let newDislikes = review.dislikes;
  
      if (currentStatus === type) {
        newStatus = null;
        if (type === "like") newLikes -= 1;
        else newDislikes -= 1;
      } else {
        if (currentStatus === "like") {
          newLikes -= 1;
          newDislikes += 1;
        } else if (currentStatus === "dislike") {
          newDislikes -= 1;
          newLikes += 1;
        } else {
          if (type === "like") newLikes += 1;
          else newDislikes += 1;
        }
      }
  
      setReviews((prevReviews) =>
        prevReviews.map((r) =>
          r.id === review.id ? { ...r, likes: newLikes, dislikes: newDislikes } : r
        )
      );
  
      return { ...prev, [review.id]: newStatus };
    });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setNewReview({ rating: 5, comment: "" });
    setIsReviewFormOpen(false);
  };

  const getSortedReviews = () => {
    if (sortFilter === "latest") {
      return [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    if (sortFilter === "mostHelpful") {
      return [...reviews].sort((a, b) => b.likes - a.likes);
    }
    if (sortFilter === "verifiedBuyers") {
      return reviews.filter((r) => r.isVerified === "true");
    }
    return reviews;
  };

  return (
    <div>
      <div className="c-comment_headline">
        <h2 className="c-tabs_content-comments_headline">
          {language === "EN" ? "User Rating for:" : "Benutzerbewertung für:"}
          <span>
            {product.name[language]} - {product.rating}/5 ({product.votes} votes)
          </span>
        </h2>
      </div>

      <div className="c-tabs_content-comments_summary-note">
        <div className="c-tabs_content-comments_summary-note-text">
          <span>
            {language === "EN"
              ? "You can also share your opinion about this product."
              : "Sie können auch Ihre Meinung zu diesem Produkt teilen."}
          </span>
          <p>
            {language === "EN"
              ? "To submit a review, please log in first. If you have ordered this product before, your review will be marked as a verified purchase."
              : "Um eine Bewertung abzugeben, loggen Sie sich bitte zuerst ein. Wenn Sie dieses Produkt zuvor bestellt haben, wird Ihre Bewertung als verifizierter Kauf markiert."}
          </p>
        </div>
        <div className="c-tabs_content-comments_summary-note-btn">
          <a
            href="#"
            className="btn-add_comment"
            onClick={(e) => {
              e.preventDefault();
              setIsReviewFormOpen(!isReviewFormOpen);
            }}
          >
            <span className="btn-add_comment-text">
              {language === "EN" ? "Add a Review" : "Bewertung hinzufügen"}
            </span>
          </a>
        </div>
      </div>

      {isReviewFormOpen && (
        <div className="qa-section-questions">
          <ReviewForm
            language={language}
            newReview={newReview}
            setNewReview={setNewReview}
            handleSubmitReview={handleSubmitReview}
          />
        </div>
      )}

      <div className="c-tabs_content-comments_filter">
        <span className="c-review_filter-title">{language === "EN" ? "User Reviews" : "Benutzerbewertungen"}</span>
        <ul className="c-review_filter-items">
          <li>
            <a href="#" className={sortFilter === "verifiedBuyers" ? "is-active" : ""} onClick={(e) => { e.preventDefault(); setSortFilter("verifiedBuyers"); }}>Verified Buyers</a>
          </li>
          <li>
            <a href="#" className={sortFilter === "mostHelpful" ? "is-active" : ""} onClick={(e) => { e.preventDefault(); setSortFilter("mostHelpful"); }}>Most Helpful</a>
          </li>
          <li>
            <a href="#" className={sortFilter === "latest" ? "is-active" : ""} onClick={(e) => { e.preventDefault(); setSortFilter("latest"); }}>Newest</a>
          </li>
        </ul>
      </div>

      <div>
        {getSortedReviews().map((review) => (
          <ul key={review.id} className="c-comment_list">
            <li key={review.id}>
              <section>
                <div className="c-comment_list-content">
                  <div className="c-comment_list-header">
                    {language === "EN" ? `Written by ${review.user} on ${review.date}` : `Geschrieben von ${review.user} am ${review.date}`}
                  </div>
                  <p>{review.comment}</p>
                  <div className="c-comment_list-footer">
                    <div className="c-comment_likes">
                      <span>Was this review helpful to you?</span>
                      <button className={`btn-like ${likedReviews[review.id] === "like" ? "active" : ""}`} onClick={() => handleLikeDislike(review, "like")}>Yes ({review.likes})</button>
                      <button className={`btn-like btn-dislike ${likedReviews[review.id] === "dislike" ? "active" : ""}`} onClick={() => handleLikeDislike(review, "dislike")}>No ({review.dislikes})</button>
                    </div>
                  </div>
                </div>
              </section>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;