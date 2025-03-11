import React, { useState } from "react";
import "./ProductImages.css";
import "./ProductImagesResponsive.css";

const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || "");

  return (
    <div className="c-product_gallery">
      <div className="c-gallery">
        {/* تصویر اصلی */}
        <div className="c-gallery_img">
          <img src={selectedImage} alt="Product" />
        </div>

        {/* تصاویر کوچک */}
        <ul className="c-gallery_items">
          {images.map((img, index) => (
            <li key={index} 
                onClick={() => setSelectedImage(img)}
                className={selectedImage === img ? "active" : ""}>
              <img src={img} alt="Thumbnail" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductImages;
