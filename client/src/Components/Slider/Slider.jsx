import React from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/effect-fade';
import imag1 from '../../assets/Placeimages/house-1.png';
import imag2 from '../../assets/Placeimages/house-2.png';
const Slider = ({ images }) => {
    // console.log(images)

    return (
        <div className="slider">
            
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                effect={'fade'}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                style={{
                    "--swiper-pagination-color": "#ff3e6c",
                }}
            >
                {images && images.map((img) => (
                <SwiperSlide key={img.index}><img src={img.url} alt={`Image ${img.index}`} /></SwiperSlide>
                
            ))}
                {/* <SwiperSlide><img src={imag1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imag2} alt="" /></SwiperSlide> */}
                {/* <SwiperSlide><img src={data[2]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[3]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[4]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[5]} alt="" /></SwiperSlide>
                <SwiperSlide><img src={data[6]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={data[7]} alt="" /></SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default Slider;