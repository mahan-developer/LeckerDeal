import React, { useState } from "react";
import "./ReviewForm.css";
import "./ReviewFormResponsive.css"

const ReviewForm = ({ language }) => {
  const [title, setTitle] = useState("");
  const [advantages, setAdvantages] = useState([]);
  const [disadvantages, setDisadvantages] = useState([]);
  const [advantageInput, setAdvantageInput] = useState("");
  const [disadvantageInput, setDisadvantageInput] = useState("");
  const [comment, setComment] = useState("");

  const handleAddAdvantage = () => {
    if (advantageInput.trim()) {
      setAdvantages([...advantages, advantageInput]);
      setAdvantageInput("");
    }
  };

  const handleAddDisadvantage = () => {
    if (disadvantageInput.trim()) {
      setDisadvantages([...disadvantages, disadvantageInput]);
      setDisadvantageInput("");
    }
  };

  const handleRemoveAdvantage = (index) => {
    setAdvantages(advantages.filter((_, i) => i !== index));
  };

  const handleRemoveDisadvantage = (index) => {
    setDisadvantages(disadvantages.filter((_, i) => i !== index));
  };

  const texts = {
    title: language === "EN" ? "Title of your review (Required)" : "Titel Ihrer Bewertung (Erforderlich)",
    strengths: language === "EN" ? "Pros" : "Vorteile",
    weaknesses: language === "EN" ? "Cons" : "Nachteile",
    commentText: language === "EN" ? "Your review (Required)" : "Ihr Kommentar (Erforderlich)",
    submit: language === "EN" ? "Submit Review" : "Bewertung abgeben",
    agreement: language === "EN" ? "By clicking ‘Submit Review’, you agree to the " : "Mit dem Klick auf 'Bewertung abgeben' stimmen Sie den ",
    terms: language === "EN" ? "Content Publication Rules" : "Regeln zur Veröffentlichung von Inhalten",
    helpOthers: language === "EN" ? "Help other customers make informed decisions by sharing your review." : "Helfen Sie anderen Kunden bei ihrer Kaufentscheidung, indem Sie Ihre Bewertung teilen..",
    helpTextTitle: language === "EN" ? "Before submitting your review, please read the following guidelines:" : "Bitte lesen Sie die folgenden Richtlinien, bevor Sie Ihre Bewertung abgeben:",
    helpTextP1: language === "EN" ? "Your review should be respectful, professional, and free from offensive language, mockery, or inappropriate remarks." : "Ihre Bewertung sollte respektvoll, sachlich und frei von beleidigender Sprache, Spott oder unangemessenen Bemerkungen sein.",
    helpTextP2: language === "EN" ? "Avoid sharing personal contact details, such as phone numbers, emails, or social media IDs, as well as links to other websites." : "Vermeiden Sie die Weitergabe persönlicher Kontaktdaten wie Telefonnummern, E-Mail-Adressen oder Social-Media-IDs sowie Links zu anderen Websites.",
    helpTextP3: language === "EN" ? "The purpose of reviews is to provide clear and accurate information that helps other users in their purchasing decisions." : "Bewertungen sollten klare und präzise Informationen enthalten, die anderen Nutzern bei ihrer Kaufentscheidung helfen.",
    helpTextP4: language === "EN" ? "Please do not ask questions or request guidance in this section. Instead, use the Q&A section for inquiries." : "Bitte stellen Sie in diesem Abschnitt keine Fragen und fordern Sie keine Beratung an. Nutzen Sie stattdessen den Q&A-Bereich für Anfragen.",
    helpTextP5: language === "EN" ? "Any mention of phone numbers, addresses, or social media accounts is prohibited." : "Die Angabe von Telefonnummern, Adressen oder Social-Media-Konten ist nicht erlaubt.",
    helpTextP6: language === "EN" ? "We recommend reviewing the full LeckerDeal review guidelines on this page." : "Wir empfehlen Ihnen, die vollständigen LeckerDeal-Bewertungsrichtlinien auf dieser Seite zu lesen.",
    helpTextP7: language === "EN" ? "For any issues related to your order, service complaints, or reporting product violations (e.g., counterfeit items or incorrect listings), please contact our support team via info@leckerdeal.de instead of writing them in the review section." 
    : "Bei Problemen mit Ihrer Bestellung, Servicebeschwerden oder der Meldung von Produktverstößen (z. B. Fälschungen oder falsche Produktangaben) kontaktieren Sie bitte unser Support-Team unter info@leckerdeal.de, anstatt dies in den Bewertungen zu erwähnen."
    
};

  return (
    <div className="c-comment_product-box">
      <div className="c-comment_add">        
        <div className="c-comment_add-row">
          <div className="c-comment_add-col_form">
            <h3 className="c-comment_add-col_form-title">
                {language === "EN" ? "Write a review" : "Schreiben Sie eine Bewertung"}
            </h3>
            <div className="c-form_comment">
              <div className="c-form_comment-row">
                <div className="c-form_comment-col">
                  <div className="c-form_comment-title">{texts.title}</div>
                  <input
                    className="c-input"
                    type="text"
                    placeholder={texts.title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="c-form_comment-row">
                <div className="c-form_comment-col">
                  <div className="c-form_comment-title c-form_comment-title_positive">{texts.strengths}</div>
                  <div className="c-form_comment-advantages">
                    <input
                      type="text"
                      className="c-input"
                      value={advantageInput}
                      onChange={(e) => setAdvantageInput(e.target.value)}
                    />
                    {advantageInput.trim() && (
                      <button className="c-form_comment-advantages_add-btn" onClick={handleAddAdvantage}></button>
                    )}
                  </div>
                  <div className="c-form_comment-dynamic_label">
                    {advantages.map((adv, index) => (
                      <div key={index} className="c-dynamic_label">
                        {adv}
                        <button className="c-dynamic_label-remove" onClick={() => handleRemoveAdvantage(index)}></button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="c-form_comment-col">
                  <div className="c-form_comment-title c-form_comment-title_negetive">{texts.weaknesses}</div>
                  <div className="c-form_comment-advantages">
                    <input
                      type="text"
                      className="c-input js-advantage_input"
                      value={disadvantageInput}
                      onChange={(e) => setDisadvantageInput(e.target.value)}
                    />
                    {disadvantageInput.trim() && (
                      <button className="c-form_comment-advantages_add-btn" onClick={handleAddDisadvantage}></button>
                    )}
                  </div>
                  <div className="c-form_comment-dynamic_label js-advantage_list c-form_comment-dynamic_label-negative">
                    {disadvantages.map((dis, index) => (
                      <div key={index} className="c-dynamic_label">
                        {dis}
                        <button className="c-dynamic_label-remove js-dynamic_label-remove" onClick={() => handleRemoveDisadvantage(index)}></button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="c-form_comment-row">
                <div className="c-form_comment-col">
                  <div className="c-form_comment-title">{texts.commentText}</div>
                  <textarea
                    className="c-textarea"
                    placeholder={texts.commentText}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="c-form_comment-row c-form_comment-row-btn">
                <div className="c-form_comment-col">
                  <button className="btn-submit_comment">{texts.submit}</button>
                </div>
                <div className="c-form_comment-col c-form_comment-col_agreement">
                  <p>
                    {texts.agreement}
                    <a href="#" className="c-link_underline">{texts.terms}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="c-comment_add-col_content">
            <h3 className="c-comment_add-col_content-title">{texts.helpOthers}</h3>
            <h4>{texts.helpTextTitle}</h4>
            <p>{texts.helpTextP1}</p>
            <p>{texts.helpTextP2}</p>
            <p>{texts.helpTextP3}</p>
            <p>{texts.helpTextP4}</p>
            <p>{texts.helpTextP5}</p>
            <p>{texts.helpTextP6}</p>
            <h4>{texts.helpTextP7}</h4>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
