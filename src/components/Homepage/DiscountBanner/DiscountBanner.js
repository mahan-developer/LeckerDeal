import React from "react";
import "./DiscountBanner.css";
import "./DiscountBannerResponsive.css";
import discountBanner1 from "../../../assets/images/banners/discount/discountbanner1.jpg"
import discountBanner2 from "../../../assets/images/banners/discount/discountbanner2.jpg"
import discountBanner3 from "../../../assets/images/banners/discount/discountbanner3.jpg"
import discountBanner4 from "../../../assets/images/banners/discount/discountbanner4.jpg"

const DiscountBanner = () => {
return (
<div className="c-discount_banner">
    <a className="c-discount_banner-item">
         <img src= {discountBanner1} alt="discount Banner" />
    </a>
    <a className="c-discount_banner-item">
         <img src= {discountBanner2} alt="discount Banner" />
    </a>
    <a className="c-discount_banner-item">
         <img src= {discountBanner3} alt="discount Banner" />
    </a>
    <a className="c-discount_banner-item">
         <img src= {discountBanner4} alt="discount Banner" />
    </a>
</div>
);
};

export default DiscountBanner;
