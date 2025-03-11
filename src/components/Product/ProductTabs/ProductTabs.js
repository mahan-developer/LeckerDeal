import React, { useState } from "react";
import ProductReviews from "../ProductReviews/ProductReviews";
import ProductQuestions from "../ProductQuestions/ProductQuestions";
import "./ProductTabs.css";
import "./ProductTabsResponsive.css";


const ProductTabs = ({ product, reviews, questions, language, mockUser }) => {
  const [activeTab, setActiveTab] = useState("reviews");

  // ترجمه تب‌ها بر اساس زبان انتخابی
  const tabLabels = {
    reviews: {
      EN: "User Reviews",
      DE: "Benutzerbewertungen"
    },
    questions: {
      EN: "Questions & Answers",
      DE: "Fragen & Antworten"
    }
  };

  return (
    <div className="product-tabs-container">

      <div className="tabs-header">
        <div className={`tabs-headerbtn ${activeTab === "reviews" ? "active" : ""}`}>
          <button 
            className='tab-item tab-item-review' onClick={() => setActiveTab("reviews")}
          >
            {tabLabels.reviews[language]}
          </button>
        </div>
        <div className={`tabs-headerbtn ${activeTab === "questions" ? "active" : ""}`}>
          <button 
            className='tab-item  tab-item-question' onClick={() => setActiveTab("questions")}
          >
            {tabLabels.questions[language]}
          </button>
        </div>
      </div>


      <div className="tab-content">
        {activeTab === "reviews" ? (
          <ProductReviews product={product} language={language} reviews={reviews} mockUser={mockUser} />
        ) : (
          <ProductQuestions language={language} questions={questions} mockUser={mockUser} />
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
