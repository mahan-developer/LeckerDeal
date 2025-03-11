import React from "react";
import "./InfoBanner.css";
import "./InfoBannerResponsive.css";
import banner1 from "../../../assets/images/banners/about/about1.jpg"
import banner2 from "../../../assets/images/banners/about/about2.jpg"
import banner3 from "../../../assets/images/banners/about/about3.jpg"
import banner4 from "../../../assets/images/banners/about/about4.jpg"

const InfoBanner = () => {
return (
<div className="c-info_banner">
    <a className="c-info_banner-item">
         <img src= {banner1} alt="Right Banner" />
    </a>
    <a className="c-info_banner-item">
         <img src= {banner2} alt="Right Banner" />
    </a>
    <a className="c-info_banner-item">
         <img src= {banner3} alt="Right Banner" />
    </a>
    <a className="c-info_banner-item">
         <img src= {banner4} alt="Right Banner" />
    </a>
</div>
);
};

export default InfoBanner;
