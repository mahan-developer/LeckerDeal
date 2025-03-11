import React from "react";
import './TopShopBanner.css';
import banner from "../../../assets/images/banners/BestShop.jpg"
import banner_mobile from "../../../assets/images/banners/BestShop_mobile.jpg"

const TopShopBanner = () => {
    return (
        <div className="c-sliders_right-topshop">
            <div className="c-sliders_right-topshop-singleimg">
                <a href="#">
                    <picture>
                        <source
                            srcSet={banner_mobile}
                            media="(max-width: 1200px)"
                        />
                        <img src={banner} alt="Right Banner" />
                    </picture>                    
                </a>
                
            </div>            
        </div>
    );
};

export default TopShopBanner;

