import React from "react";
import "./ProductDetails.css"
import "./ProductDetailsResponsive.css"

const ProductDetails = ({ product, language }) => { 

  const rating = product.rating;
  const votes = product.votes;
  const restaurantName = product.restaurantName ;
  const title = product.name?.[language];

  return (
    <div>
      
      <div className="c-product_information">
        <div className="c-product_info">
          <span>Ingredients</span>  
          <ul>
            {product.description[language].map((item, index) => (
              <li className="c-product_info-li" key={index}>{item}</li>
            ))}
          </ul>
        </div>        
      </div>

    </div>
  );
};
export default ProductDetails;

