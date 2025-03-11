import React, { useState } from "react";
import "./Footer.css";
import "./FooterResponsicve.css"
import instalogo from "../../assets/images/Global/insta.png"
import '../../assets/styles/global.css';

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  const textSections = [
    {
      title: "Special Features for Business Owners",
      content:
        "With the LeckerDeal Windows app, café and restaurant owners can easily manage their menu and products. The app provides features such as order management, small-scale accounting, and sales reporting.",
    },
    {
      title: "A New Experience for Customers",
      content:
        "For customers, LeckerDeal is the perfect opportunity to discover delicious meals and drinks at discounted prices from nearby cafés and restaurants. You can effortlessly browse through the site, find attractive deals, and confidently choose your favorite meals.",
    },
    {
      title: "Why Choose LeckerDeal?",
      content:
        "LeckerDeal combines cutting-edge technology with a smart approach to create an effective connection between customers and food businesses. LeckerDeal is the bridge between food businesses and customers looking for a delightful and budget-friendly experience.",
    },
  ];

  const textSectionsTitle = [
    {
      content:"LeckerDeal is an advanced platform that offers a unique experience for both customers and café or restaurant owners. The site enables customers to discover the best local deals and food offers, while allowing business owners to elevate their management processes with the LeckerDeal Windows application."
    }
  ];


  const footerLinks = [
    {
      title: "Explore LeckerDeal",
      links: ["Top Deals", "New Arrivals", "Popular Restaurants", "How It Works"],
    },
    {
      title: "For Business Owners",
      links: ["Join LeckerDeal", "Upload Your Menu", "Manage Your Deals", "Support"],
    },
    {
      title: "Customer Services",
      links: ["FAQs", "Refund Policy", "Terms & Conditions", "Privacy Policy"],
    },
  ];

  const features = [
    {
      text: "Accurate Food & Drink Information Guarantee",
      image: require("../../assets/images/feature/guarantee.svg"), 
    },
    {
      text: "24/7 Support for Customers and Businesses",
      image: require("../../assets/images/feature/support.svg"),
    },
    {
      text: "Transparency in Pricing and Discounts",
      image: require("../../assets/images/feature/guarantee.svg"),
    },
    {
      text: "Cash on Delivery",
      image: require("../../assets/images/feature/pay.svg"),
    },
  ];

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <footer className="c-footer">
      <div className="container">
        {/* دکمه برگشت به بالا */}
        <div className="c-footer_jump-top">
          <span
            className="c-footer_jump-top_container js-footer_jump-top_containe"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="c-footer_jump-top_icon"></span>
            &nbsp;&nbsp;Back to Top
          </span>
        </div>

        {/* Features */}
        <div className="c-footer_feature">
          {features.map((feature, index) => (
            <a href="#" className="c-footer_feature-item" key={index}>
              <img src={feature.image} alt={feature.text} className="feature-icon" />
              <div className={`c-footer-feature_item c-sliders_right-feature_item-${index + 1}`}>
                {feature.text}
              </div>
            </a>
          ))}
        </div>

        <hr />

        {/* لینک‌ها */}
        <div className="c-footer_about">

          <div className="c-footer_links">
            {footerLinks.map((section, index) => (
              <nav className="c-footer_links-col" key={index}>
                <div className="c-footer_links-headline">
                  <div><a href="#">{section.title}</a></div>
                </div>
                <ul className="c-footer_links-ul">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* فرم خبرنامه */}
          <div className="c-footer_form">
            <form className="c-form_newsletter">
              <fieldset>
                <legend className="c-form_newsletter-title">Stay updated with our latest deals and new arrivals.</legend>
                <div className="c-form_newsletter-row">
                  <input className="c-form_newsletter-input" placeholder="Enter Your Email Address" />
                  <button type="submit" className="c-form_newsletter-btn">Send</button>
                </div>
              </fieldset>
            </form>

            {/* شبکه‌های اجتماعی */}
            <div className="c-footer_community">
              <div className="c-footer_social">
                <span>Follow us on social media</span>
                <div className="c-footer_social-image">
                  <div className="c-footer_social-instagram">
                    <a href="#">
                      <img src={instalogo} width="25px" alt="Instagram" />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
         
      </div>


      {/* توضیحات */}
      <div className="c-footer_more-info">
        <div className="container">
          <div className="c-footer_description">
            <div className="c-footer_description-content">
              <article className="c-footer_seo">
                <h1>LeckerDeal: Discover, Choose, and Enjoy Exclusive Dining Deals Online</h1>
                  <span className="c-footer_seo-content">                  
                    {textSectionsTitle.map((section, index) => (
                      <div key={index}>
                        <p>{section.content}</p>
                      </div>
                   ))}
                  </span>
                  {showMore && (
                   <span className="c-footer_seo-readmore">
                   {textSections.map((section, index) => (
                     <div key={index}>
                       <p>
                         <strong>{section.title}</strong>
                       </p>
                       <p>{section.content}</p>
                     </div>
                   ))}
                 </span>
                  )}
                  <a
                    href="#"
                    className="c-footer_btn-readmore"
                    onClick={(e) => {
                      e.preventDefault(); 
                      toggleReadMore();
                    }}
                  >
                    {showMore ? " close " : " See More "}
                  </a>
              </article>
            </div>
          </div>
        </div>
      </div>

      <hr/>
      <hr/>
      
    </footer>
  );
};

export default Footer;
