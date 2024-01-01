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


export default (props: any) => {
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
      {props.imgs.map((item : any) => {
        return (<SwiperSlide className='swiperSlider'><img src={`/images/${item.url}`} alt="background image" /></SwiperSlide>)
      })}
      
    </Swiper>
  );
};