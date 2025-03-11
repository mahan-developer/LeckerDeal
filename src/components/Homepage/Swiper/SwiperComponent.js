import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // ایمپورت Swiper و SwiperSlide
import { Navigation, Pagination } from "swiper/modules"; // ایمپورت Navigation و Pagination
import "swiper/css"; // ایمپورت CSS اصلی Swiper
import "swiper/css/navigation"; // ایمپورت CSS برای Navigation
import "swiper/css/pagination"; // ایمپورت CSS برای Pagination
import "./SwiperComponent.css";
import "./SwiperComponentResponsive.css";

const SwiperComponent = ({ slides, title, enablePagination, onProductClick }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // برای رفرنس Swiper

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper; // دریافت نمونه Swiper
      swiperInstance.params.navigation.prevEl = prevRef.current; // اتصال دکمه قبلی
      swiperInstance.params.navigation.nextEl = nextRef.current; // اتصال دکمه بعدی
      swiperInstance.navigation.init(); // مقداردهی اولیه Navigation
      swiperInstance.navigation.update(); // بروزرسانی Navigation
    }
  }, []);

  return (
    <section className="c-swiper">
      <div className="c-swiper_headline">
        <span>{title}</span>
      </div>
      <div className="c-swiper_content" data-count-lg="4">
        <Swiper
          ref={swiperRef} // رفرنس Swiper
          modules={[Navigation, Pagination]}
          pagination={enablePagination ? { clickable: true } : false} // کنترل Pagination
          spaceBetween={10}
          breakpoints={{
            1200: { slidesPerView: 5.5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            0: { slidesPerView: 2 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="c-swiper_slide">
              <a className="c-swiper_url" href="#" onClick={(e) => { 
                    e.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه
                    onProductClick(slide.restaurantId, slide.id); 
                }}>
                  <span className="c-swiper_img">
                    <img src={slide.img} alt={slide.title} />
                  </span>
                  <span className="c-swiper_title">{slide.title}</span>
                  <span className="c-swiper_price">
                    <span className="c-swiper_price-value">
                      {slide.price} <span>&nbsp;Euro</span>
                    </span>
                  </span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* دکمه‌های ناوبری سفارشی */}
        <div ref={prevRef} className="swiper-button-prev"></div>
        <div ref={nextRef} className="swiper-button-next"></div>
      </div>
    </section>
  );
};

export default SwiperComponent;
