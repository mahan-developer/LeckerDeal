import React from "react";
import { useNavigate } from "react-router-dom";
import MainSlider from "./MainSlider/MainSlider";
import RightBanner from "./RightBanner/RightBanner";
import DiscountSlider from "./DiscountSlider/DiscountSlider";
import TopShopBanner from "./TopShopBanner/TopShopBanner";
import DiscountBanner from "./DiscountBanner/DiscountBanner";
import SwiperComponent from "./Swiper/SwiperComponent";
import InfoBanner from "./InfoBanner/InfoBanner";
import './HomepageComponent.css';
import './HomepageComponentResponsive.css';
import '../../assets/styles/global.css';

import topOffer1_1 from "../../assets/images/sliders/top-offer-1/1.jpg";
import topOffer1_2 from "../../assets/images/sliders/top-offer-1/2.jpg";
import topOffer1_3 from "../../assets/images/sliders/top-offer-1/3.jpg";
import topOffer1_4 from "../../assets/images/sliders/top-offer-1/4.jpg";
import topOffer1_5 from "../../assets/images/sliders/top-offer-1/5.jpg";
import topOffer1_6 from "../../assets/images/sliders/top-offer-1/6.jpg";
import topOffer1_7 from "../../assets/images/sliders/top-offer-1/7.jpg";

import topOffer2_1 from "../../assets/images/sliders/top-offer-2/1.jpg";
import topOffer2_2 from "../../assets/images/sliders/top-offer-2/2.jpg";
import topOffer2_3 from "../../assets/images/sliders/top-offer-2/3.jpg";
import topOffer2_4 from "../../assets/images/sliders/top-offer-2/4.jpg";
import topOffer2_5 from "../../assets/images/sliders/top-offer-2/5.jpg";
import topOffer2_6 from "../../assets/images/sliders/top-offer-2/6.jpg";
import topOffer2_7 from "../../assets/images/sliders/top-offer-2/7.jpg";
import topOffer2_8 from "../../assets/images/sliders/top-offer-2/8.jpg";

const HomepageComponent = () => {

  const navigate = useNavigate();

  const handleProductClick = (restaurantId, productId) => {
    navigate(`/restaurant/${restaurantId}/product/${productId}`);
  };

  const slidesFastFood = [
    { id: 101, restaurantId: 1001, img: topOffer1_1, title: "Special Doner", price: "14" },
    { id: 102, restaurantId: 1002, img: topOffer1_2, title: "Pizza Peperoni", price: "17" },
    { id: 103, restaurantId: 1003, img: topOffer1_3, title: "Pizza RostBeaf", price: "16" },
    { id: 104, restaurantId: 1004, img: topOffer1_4, title: "Big Ham", price: "23" },
    { id: 105, restaurantId: 1005, img: topOffer1_5, title: "Wurst", price: "16" },
    { id: 106, restaurantId: 1006, img: topOffer1_6, title: "Pizza Chili", price: "21" },
    { id: 107, restaurantId: 1007, img: topOffer1_7, title: "Spicy Chicken Wings", price: "21" },
];

const slidesCafe = [
    { id: 201, restaurantId: 2001, img: topOffer2_1, title: "Strawberry Frappuccino", price: "14" },
    { id: 202, restaurantId: 2002, img: topOffer2_2, title: "Chocolate Cake", price: "17" },
    { id: 203, restaurantId: 2003, img: topOffer2_3, title: "Milkshake Peanut", price: "16" },
    { id: 204, restaurantId: 2004, img: topOffer2_4, title: "Caffè Mocha", price: "23" },
    { id: 205, restaurantId: 2005, img: topOffer2_5, title: "Iced Cappuccino", price: "16" },
    { id: 206, restaurantId: 2006, img: topOffer2_6, title: "Smoothie Jungle", price: "21" },
    { id: 207, restaurantId: 2007, img: topOffer2_7, title: "Iced Chocolate Coffee", price: "21" },
    { id: 208, restaurantId: 2008, img: topOffer2_8, title: "Smoothie Mango", price: "21" },
];

const slidesPersian = [
    { id: 301, restaurantId: 3001, img: require("../../assets/images/sliders/popular-1/1.jpg"), title: "Kebab Koobide", price: "14" },
    { id: 302, restaurantId: 3002, img: require("../../assets/images/sliders/popular-1/2.jpg"), title: "Ghorme Sabzi", price: "17" },
    { id: 303, restaurantId: 3003, img: require("../../assets/images/sliders/popular-1/3.jpg"), title: "Dizi Sangi", price: "16" },
    { id: 304, restaurantId: 3004, img: require("../../assets/images/sliders/popular-1/4.jpg"), title: "Sabzi Polo BA Mahi", price: "23" },
    { id: 305, restaurantId: 3005, img: require("../../assets/images/sliders/popular-1/5.jpg"), title: "Kashk Bademjoon", price: "16" },
    { id: 306, restaurantId: 3006, img: require("../../assets/images/sliders/popular-1/6.jpg"), title: "Halim", price: "21" },
    { id: 307, restaurantId: 3007, img: require("../../assets/images/sliders/popular-1/7.jpg"), title: "Kale Pache", price: "21" },
];

const slidesJapanese = [
    { id: 401, restaurantId: 4001, img: require("../../assets/images/sliders/popular-2/1.jpg"), title: "Miso Soup", price: "14" },
    { id: 402, restaurantId: 4002, img: require("../../assets/images/sliders/popular-2/2.jpg"), title: "Okonomiyaki", price: "17" },
    { id: 403, restaurantId: 4003, img: require("../../assets/images/sliders/popular-2/3.jpg"), title: "Curry Rice", price: "16" },
    { id: 404, restaurantId: 4004, img: require("../../assets/images/sliders/popular-2/4.jpg"), title: "Kashi Pan", price: "23" },
    { id: 405, restaurantId: 4005, img: require("../../assets/images/sliders/popular-2/5.jpg"), title: "Donburi", price: "16" },
    { id: 406, restaurantId: 4006, img: require("../../assets/images/sliders/popular-2/6.jpg"), title: "Edamame", price: "21" },
    { id: 407, restaurantId: 4007, img: require("../../assets/images/sliders/popular-2/7.jpg"), title: "Tamagoyaki", price: "21" },
];



  return (
    <div className="container">
       <div className="c-slider">        
          <div className="c-sliders_row">            
            <div className="c-mainslider_left">  
              <MainSlider/>
            </div>
            <div className="c-mainslider_right">
              <RightBanner/> 
            </div>            
          </div>
          <div className="c-sliders_row c-topbanner_responsive">
            <RightBanner/>
            <TopShopBanner/> 
          </div>
          <div className="c-sliders_row">
            <div className="c-mainslider_left">  
              <DiscountSlider/>
            </div>
            <div className="c-mainslider_right">
              <TopShopBanner/> 
            </div>  
          </div>
          <div className="c-sliders_row">
            <DiscountBanner/>
          </div>
          <div className="c-sliders_row">
           <SwiperComponent slides={slidesFastFood} title="Top Offer in Fast Food" enablePagination={false} onProductClick={handleProductClick} />
          </div>
          <div className="c-sliders_row">
           <SwiperComponent slides={slidesCafe} title="Top Offer in Cafe" enablePagination={false} onProductClick={handleProductClick} />
          </div>
          <div className="c-sliders_row">
            <InfoBanner/>
          </div>
          <div className="c-sliders_row">
           <SwiperComponent slides={slidesPersian} title="Popular Persian Food" enablePagination={false} onProductClick={handleProductClick} />
          </div>
          <div className="c-sliders_row">
           <SwiperComponent slides={slidesJapanese} title="Popular Japaneas Food" enablePagination={false} onProductClick={handleProductClick} />
          </div>
        </div>
    </div>   
);
};

export default HomepageComponent;
