import React from "react";
import './RightBanner.css';
import banner from "../../../assets/images/banners/right_banner.jpg"
import banner_mobile from "../../../assets/images/banners/right_banner_mobile.jpg"

const RightBanner = () => {
    return (
        <div className="c-sliders_right">
            <div className="c-sliders_right-singleimg">
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
export default RightBanner;

