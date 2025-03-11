import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // استایل‌های پایه Swiper
import 'swiper/css/navigation'; // استایل‌های ناوبری
import 'swiper/css/pagination'; // استایل‌های نقطه‌ها
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import img1 from "../../../assets/images/sliders/main/1.jpg";
import img2 from "../../../assets/images/sliders/main/2.jpg";
import img3 from "../../../assets/images/sliders/main/3.jpg";
import img4 from "../../../assets/images/sliders/main/4.jpg";
import './MainSlider.css';

const MainSlider = () => {    
    const slides = [
        { id: 1, image: img1, link: '#' },
        { id: 2, image: img2, link: '#' },
        { id: 3, image: img3, link: '#' },
        { id: 4, image: img4, link: '#' },
    ];

    return (
        <div className="c-sliders_left">
            <section className="c-main_slider c-desktop_main-slider">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: '.c-slider_next',
                        prevEl: '.c-slider_prev',
                    }}
                    pagination={{
                        el: '.c-slider_dots',
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 7000, 
                        disableOnInteraction: false, // بعد از تعامل، Autoplay ادامه داشته باشد
                    }}
                    className="c-slider_slide"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <a
                                className="c-slide"
                                style={{ backgroundImage: `url(${slide.image})` }}
                                href={slide.link}
                            ></a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* دکمه‌های ناوبری */}
                <div className="c-slider_next"></div>
                <div className="c-slider_prev"></div>
                {/* نقطه‌ها */}
                <div className="c-slider_dots"></div>
            </section>
        </div>
    );
};

export default MainSlider;
