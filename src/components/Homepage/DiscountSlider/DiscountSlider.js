import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./DiscountSlider.css";
import "./DiscountSliderResponsive.css";
import image1 from "../../../assets/images/sliders/amazing-offer/1.jpg";
import image2 from "../../../assets/images/sliders/amazing-offer/2.jpg";
import image3 from "../../../assets/images/sliders/amazing-offer/3.jpg";
import image4 from "../../../assets/images/sliders/amazing-offer/4.jpg";
import image5 from "../../../assets/images/sliders/amazing-offer/5.jpg";
import image6 from "../../../assets/images/sliders/amazing-offer/6.jpg";
import image7 from "../../../assets/images/sliders/amazing-offer/7.jpg";
import image8 from "../../../assets/images/sliders/amazing-offer/8.jpg";
import image9 from "../../../assets/images/sliders/amazing-offer/9.jpg";
import image10 from "../../../assets/images/sliders/amazing-offer/10.jpg";

const DiscountSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timers, setDiscountTimers] = useState([]);
  const [shouldPause, setShouldPause] = useState(false);
  const itemRefs = useRef([]);

  const navigate = useNavigate();

  const handleProductClick = (restaurantId, productId) => {
    navigate(`/restaurant/${restaurantId}/product/${productId}`);
  };



  const products = [
    {
      id: 101,
      restaurantId: 100001, 
      title: "Special Doner",
      image: image1,
      originalPrice: "12",
      discountPrice: "6",
      discountPercent: "50%",
      features: ["Lamb meat","Bio vegetables"],
      endTime: Date.now() + 3600 * 1000, // یک ساعت تایمر
    },
    {
      id: 104,
      restaurantId: 100201, 
      title: "Big Berger",
      image: image2,
      originalPrice: "14",
      discountPrice: "9.8",
      discountPercent: "30%",
      features: ["Beef","Extra sauce", "Big Cola"],
      endTime: Date.now() + 7200 * 1000, // دو ساعت تایمر
    },
    {
      id: 501,
      restaurantId: 100009, 
      title: "Caesar salad",
      image: image3,
      originalPrice: "15",
      discountPrice: "9",
      discountPercent: "40%",
      features: ["Bio","Fresh chicken"],
      endTime: Date.now() + 5400 * 1000, // یک ساعت و نیم تایمر
    },
    {
      id: 408,
      restaurantId: 102301, 
      title: "Sushi 8 pieces",
      image: image4,
      originalPrice: "8",
      discountPrice: "7.2",
      discountPercent: "10%",
      features: ["8 pieces","Extra Soy sauce","Extra Wasabi"],
      endTime: Date.now() + 1800 * 1000, // نیم ساعت تایمر
    },
    {
      id: 109,
      restaurantId: 111101, 
      title: "Pizza Margarita family",
      image: image5,
      originalPrice: "20",
      discountPrice: "12",
      discountPercent: "40%",
      features: ["Vegetarian","Bio"],
      endTime: Date.now() + 90 * 1000, // 15 دقیقه تایمر
    },
    {
      id: 907,
      restaurantId: 1023122, 
      image: image6,
      title: "Schnitzel",
      originalPrice: "9",
      discountPrice: "8.1",
      discountPercent: "10%",
      features: ["Fresh chicken","3 pieces"],
      endTime: new Date().getTime() + 3600 * 1000, // تایمر نمونه
  },
  {
      id: 905,
      restaurantId: 1012312, 
      image: image7,
      title: "Currywurst",
      originalPrice: "5",
      discountPrice: "4.5",
      discountPercent: "10%",
      features: ["Extra Hot","Extra French fries"],
      endTime: new Date().getTime() + 3600 * 1000, // تایمر نمونه
  },
  {
      id: 603,
      restaurantId: 134234, 
      image: image8,
      title: "Rice and Koobide",
      originalPrice: "20",
      discountPrice: "18",
      discountPercent: "10%",
      features: ["Fresh lamb","Iranian rice"],
      endTime: new Date().getTime() + 3600 * 1000, // تایمر نمونه
  },
  {
      id: 10,
      restaurantId: 1023423, 
      image: image9,
      title: "Cheesecake",
      originalPrice: "8",
      discountPrice: "7.2",
      discountPercent: "10%",
      features: ["200 gram slice","Whit Caramel cream"],
      endTime: new Date().getTime() + 3600 * 1000, // تایمر نمونه
  },
  {
      id: 110,
      restaurantId: 156701, 
      image: image10,
      title: "Hotdog",
      originalPrice: "8",
      discountPrice: "6.4",
      discountPercent: "20%",
      features: ["Bavarian recipe","Free beer"],
      endTime: new Date().getTime() + 3600 * 1000, // تایمر نمونه
  }
];

useEffect(() => {
  if (timers.length === 0) {
    setDiscountTimers(products.map((product) => Math.max(product.endTime - Date.now(), 0)));
  }
}, []);


// کاهش زمان تخفیف‌ها به صورت دوره‌ای
useEffect(() => {
  const timerInterval = setInterval(() => {
    setDiscountTimers((prevTimers) =>
      prevTimers.map((time) => Math.max(time - 1000, 0))
    );
  }, 1000);

  return () => clearInterval(timerInterval);
}, []);


 // تغییر اتوماتیک اسلایدر تخفیف‌ها
useEffect(() => {
  if (!shouldPause) {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); // تغییر اسلاید هر ۵ ثانیه

    return () => clearInterval(interval); // پاکسازی تایمر
  }
}, [shouldPause, activeIndex]);

/* useEffect(() => {
  if (itemRefs.current[activeIndex]) {
    const parentContainer = itemRefs.current[activeIndex].closest(".c-discount_aside");
    if (parentContainer) {
      parentContainer.scrollTo({
        left: itemRefs.current[activeIndex].offsetLeft - parentContainer.offsetLeft,
        behavior: "smooth", // حرکت نرم اسکرول
      });
    }
  }
}, [activeIndex]); */

useEffect(() => {
  if (itemRefs.current[activeIndex]) {
    const parentContainer = itemRefs.current[activeIndex].closest(".c-discount_aside");
    const activeItem = itemRefs.current[activeIndex];

    if (parentContainer) {
      const parentCenter = parentContainer.offsetWidth / 2; // مرکز والد
      const itemCenter = activeItem.offsetWidth / 2; // مرکز آیتم
      const scrollPosition =
        activeItem.offsetLeft - parentContainer.offsetLeft - parentCenter + itemCenter;

      parentContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth", // حرکت نرم
      });
    }
  }
}, [activeIndex]);




const handleItemClick = (index) => {
  setActiveIndex(index);
  setShouldPause(true);
};

const handleMouseEnter = () => {
  if (shouldPause) {
    // اگر حالت توقف فعال باشد، تایمر متوقف می‌شود
    setShouldPause(true);
  }
};

const handleMouseLeave = () => {
  // هنگام خروج موس، تایمر دوباره فعال می‌شود
  setShouldPause(false);
};


const formatTime = (time) => {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  return `${hours.toString().padStart(2, "0")} : ${minutes
    .toString()
    .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
};

return (
  <div className="c-sliders_discount">

      <div className="c-discount">
        <div className="c-discount_aside">
          <div className="c-discount_aside-container"
           onMouseEnter={handleMouseEnter} // توقف تایمر هنگام ورود موس
           onMouseLeave={handleMouseLeave} // شروع مجدد تایمر هنگام خروج موس
          >
            <ul className="c-discount_aside-ul">
              {products.map((product, index) => (
                <li
                  key={product.id}
                  className={`c-discount_aside-li ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => handleItemClick(index)}
                  ref={(el) => (itemRefs.current[index] = el)}
                >
                  <a className={`c-discount_aside-a ${index === activeIndex ? "is-active" : ""}`}>
                    <span>{product.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a className="c-discount_aside-a c-discount_aside-button">
              See all amazing offer
            </a>
          </div>
        </div>

        <div className="c-discount_box">
          <div className="c-discount_product">
            <div className="c-discount_image-topbar"></div>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`c-discount_container ${index === activeIndex ? "is-active" : ""}`}
              >
                <a href="#" 
                  className="c-discount_product-url" 
                  onClick={(e) => { 
                      e.preventDefault(); 
                      handleProductClick(product.restaurantId, product.id);
                  }}>
                    <div className="c-discount_content">
                    <div className="c-discount_image">                    
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="c-discount_prop">                    
                      <div className="c-discount_price">
                        <div className="c-discount_price-primary">
                          <span className="c-discount_price-original">
                            {product.originalPrice}
                            <span>&nbsp;&nbsp;Euro</span>
                          </span>
                          <span className="c-discount_price-now">
                            {product.discountPrice}
                            <span>&nbsp;&nbsp;Euro</span>
                          </span>
                        </div>
                        <div className="c-discount_price-discount">
                          <div className="c-discount_price-discount_content">
                            {product.discountPercent}
                            <span>&nbsp;&nbsp;OFF</span>
                          </div>
                        </div>
                      </div>
                      <div className="c-discount_title">{product.title}</div>
                      <ul className="c-discount_ul">
                        {product.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      <div className="c-discount_counter">
                        {timers[index] > 0 ? (
                          <>
                            <div className="c-counter">{formatTime(timers[index])}</div>
                            <div className="c-discount_counter-title">
                            Time left for the discount
                            </div>
                          </>
                        ) : (
                          <div className="c-discount_counter-title">
                            Time is up.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>                    
                </a>
                
              </div>
            ))}
          </div>
        </div>
        
      </div>

  </div>
);
};

export default DiscountSlider;
