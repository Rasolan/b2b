"use client";
// import Swiper core and required modules
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import './mainSlider.css'

const images = [
  {"url": "1.png"},
  {"url": "2.png"},
  {"url": "3.png"},
  {"url": "4.png"}
]
export default () => {
  return (
    <Swiper
    className='mainSwiper'
      // install Swiper modules
      modules={[EffectFade, Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={50}
      effect={'fade'}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      // navigation={true}
      pagination={{ clickable: true }}
    >
      {images.map((item) => {
        return (<SwiperSlide className='swiperSlider'><img src={`/images/mainSlider/${item.url}`} alt="background image" /></SwiperSlide>)
      })}
      
    </Swiper>
  );
};