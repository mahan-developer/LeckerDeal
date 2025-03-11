import React, { useState, useEffect } from "react";
import "./ProductQuestions.css";
import "./ProductQuestionsResponsive.css"

const ProductQuestions = ({ language, questions, mockUser }) => {
  const [questionText, setQuestionText] = useState("");
  const [agree, setAgree] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [likedAnswers, setLikedAnswers] = useState({});
  const [answerText, setAnswerText] = useState("");
  const [sortFilter, setSortFilter] = useState("latest");



  useEffect(() => {
    const initialLikes = {};
    mockUser.likedMessages.forEach(({ answerId, liked, disliked }) => {
      if (liked) initialLikes[answerId] = "like";
      if (disliked) initialLikes[answerId] = "dislike";
    });
    setLikedAnswers(initialLikes);
  }, [mockUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert(language === "EN" ? "You must agree to submit!" : "Sie müssen zustimmen, um fortzufahren!");
      return;
    }
    setQuestionText("");
    setAgree(false);
  };

  const toggleExpand = (questionId) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const getSortedQuestions = () => {
    if (sortFilter === "latest") {
      return [...questions].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    if (sortFilter === "mostAnswered") {
      return [...questions].sort((a, b) => b.answers.length - a.answers.length);
    }
    if (sortFilter === "userQuestions") {
      return questions.filter((q) => q.user === mockUser.name);
    }
    return questions;
  };


  const handleLikeDislike = (answer, type) => {
    setLikedAnswers((prev) => {
      const currentStatus = prev[answer.id];
      let newStatus = type;
      let newLikes = answer.likes;
      let newDislikes = answer.dislikes;
  
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
  
      answer.likes = newLikes;
      answer.dislikes = newDislikes;
  
      return { ...prev, [answer.id]: newStatus };
    });
  };

  return (
    <div className="qa-section">
      <div className="qa-section-title">
        <h2>{language === "EN" ? "Questions & Answers" : "Fragen & Antworten"}</h2>
      </div>

      <div className="qa-section-questions">
        <h4>{language === "EN" ? "Ask your question about the product" : "Stellen Sie Ihre Frage zum Produkt"}</h4>

        <form className="c-form_faq" onSubmit={handleSubmit}>
          <div className="c-form_faq-row">
            <div className="c-form_faq-col">
              <textarea
                className="c-textarea"
                title="Question text"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
              />
            </div>
          </div>

          <div className="c-form_faq-row c-form_faq-row-btn">
            <div className="c-form_faq-col c-form_faq-col_submit">
              <button type="submit" className="btn-primary btn-gray">
                {language === "EN" ? "Submit Question" : "Frage senden"}
              </button>
            </div>

            <div className="c-form_faq-col c-form_faq-col_agreement">
              <label htmlFor="agreement_check">
                {language === "EN"
                  ? 'By selecting the "Submit Question" button, you agree to the rules for '
                  : 'Durch das Senden einer Frage stimmen Sie den '}
                <a className="c-link_underline"> {language === "EN" ? "publishing content" : "Veröffentlichungsregeln"} </a>.
              </label>

              <label className="c-checkbox">
                <input
                  type="checkbox"
                  id="agreement_check"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span className="c-checkbox_check"></span>
              </label>
            </div>
          </div>
        </form>
      </div>



      <div className="c-tabs_content-comments_filter">
        <span className="c-faq_filter-title">
         {language === "EN" ? "Questions & Answers" : "Frage Und Antwort"}
        </span>
        <ul className="c-faq_filter-items">
          <li>
            <a href="#" className={sortFilter === "latest" ? "is-active" : ""} onClick={(e) => { e.preventDefault(); setSortFilter("latest"); }}>
              {language === "EN" ? "Latest" : "Neueste"}
            </a>
          </li>
          <li>
            <a href="#" className={sortFilter === "mostAnswered" ? "is-active" : ""}  onClick={(e) => { e.preventDefault(); setSortFilter("mostAnswered"); }}>
              {language === "EN" ? "Most Answered" : "Meistbeantwortete"}
            </a>
          </li>
          <li>
            <a href="#" className={sortFilter === "userQuestions" ? "is-active" : ""} onClick={(e) => { e.preventDefault(); setSortFilter("userQuestions"); }}>
              {language === "EN" ? "Your Questions" : "Ihre Fragen"}
            </a>
          </li>
        </ul>
      </div>


      <div className="c-faq_list-content">
        {getSortedQuestions().map((question) => (
          <ul key={`question-${question.id}`} className="c-faq_list">
            <li key={`question-${question.id}`} className="question-box">
              <div>
                <div className="c-faq_header c-faq_header-question">
                  <p>Question <span>{question.user}</span></p>
                </div>
                <p className="c-faq_content">{question.question}</p>
                <div className="c-faq_footer">
                  <div className="c-faq_footer-content">
                    <div className="c-faq_footer-answercount">
                    <span className="c-link_underline" onClick={() => toggleExpand(question.id)}>
                      {expandedQuestions[question.id] ? "Hide answers" : `Show answers (${question.answers.length})`}
                    </span>
                    </div>
                    <div className="c-faq_footer-date">
                      <span>{question.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {expandedQuestions[question.id] &&
              question.answers.map((answer) => (
                <li key={`answer-${answer.id}`} className="answer-box">
                  <div className="c-faq_header c-faq_header-answer">
                    <p>Answer <span>{answer.user}</span></p>
                  </div>
                  <p className="c-faq_content">{answer.answer}</p>
                  <div className="c-faq_footer">
                    <div className="c-faq_footer-content">
                      <div className="c-comment_likes">
                        <span>Was this answer helpful to you?</span>
                        <button
                          className={`btn-like ${likedAnswers[answer.id] === "like" ? "active" : ""}`}
                          onClick={() => handleLikeDislike(answer, "like")}
                        >
                          Yes ({answer.likes})
                        </button>
                        <button
                          className={`btn-like btn-dislike ${likedAnswers[answer.id] === "dislike" ? "active" : ""}`}
                          onClick={() => handleLikeDislike(answer, "dislike")}
                        >
                          No ({answer.dislikes})
                        </button>
                      </div>
                      <div className="c-faq_footer-date">
                        <span>{answer.date}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            {expandedQuestions[question.id] && (
              <li className="answer-box">

              <div className="faq_answer">
                  <div className="faq_answer-row">
                      <div className="faq_answer-col_form">
                          <span>Answer this question</span>
                          <form className="c-faq_form-answer">
                              <div className="c-faq_form-answer_row">
                                  <div className="c-faq_form-answer_col">
                                    <textarea className="c-textarea" value={answerText} onChange={(e) => setAnswerText(e.target.value)}></textarea>
                                  </div>
                              </div>
                              <div className="c-faq_form-answer_row">
                                  <div className="c-faq_form-answer_col c-faq_form-answer_col-submit">
                                  <button className="c-faq_answer-btn" type="submit">Submit Answer</button>
                                  </div>
                                  <div className="c-faq_form-answer_col c-faq_form-answer_col-agreement">
                                  <label htmlFor="agreement_check">
                                    {language === "EN"
                                      ? 'By selecting the "Submit Answer" button, you agree to the rules for '
                                      : 'Durch das Senden einer Antwort stimmen Sie den '}
                                    <a className="c-link_underline"> {language === "EN" ? "publishing content" : "Veröffentlichungsregeln"} </a>.
                                  </label>
                                  </div>
                              </div>
                          </form>
                      </div>
                      <div className="faq_answer-col_rules">
                          <span className="c-faq_rules-headline">How to write a good answer</span>
                          <ul className="c-faq_rules-list">
                              <li>
                                  <span>Have you tried this dish?</span>
                                  <p>Share your experience about the taste and quality of the food.</p>
                              </li>
                              <li>
                                  <span>What did you particularly like</span>
                                  <p>Was the food fresh, well-seasoned, or well-presented?</p>
                              </li>
                              <li>
                                  <span>Was there anything that could be improved?</span>
                                  <p>Give honest feedback on portion size, value for money, or waiting time.</p>
                              </li>
                              <li>
                                  <span>Be polite and constructive</span>
                                  <p>Respectful and detailed answers help other customers.</p>
                              </li>
                              <li>
                                  <span>Keep it short and precise</span>
                                  <p>A clear and understandable answer is more helpful</p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              </li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ProductQuestions;