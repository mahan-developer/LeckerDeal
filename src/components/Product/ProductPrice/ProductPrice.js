import React from "react";
import "./ProductPrice.css"
import "./ProductPriceResponsive.css"
import "../../../assets/styles/global.css"

const ProductPrice = ({ product, language }) => {
  return (
    <div className="product-price">
      <div className="product-info">
        <div className="information-store">        
          <span>Store Name :  <a href={`/restaurant/${product.restaurantId}`}>{product.restaurantName}</a></span>
        </div>
        <div className="information-category">
          <span>Category :  <a href={`/category/${product.categoryId}`}>{product.category}</a></span>
        </div>
      </div>
      <div className="price-info">
        <div className="product-info-price">
          <div className="product-price_normal">
            <span>{product.price} euro  </span>
          </div>
          <div className="product-price_discount">
            <span>{product.discountPrice}  euro </span>
          </div>
        </div>
        <div className="product-discount">
          <div className="Product-discount_shape">
            <span>{product.discount} % </span>
          </div>          
        </div>        
      </div>
      <div className="product-button">
        <div className="c-product_add">
            <a className="btn-add_card">
                <span className="btn-add_card-text">Add to cart</span>
            </a>
        </div>
      </div>
    </div>
  );
};


export default ProductPrice;
