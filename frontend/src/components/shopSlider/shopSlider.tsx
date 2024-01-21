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
import './shopSlider.css'

const sliderCards = [
    {
        "img": "1.png",
        'info': "Купив себе косметические украшения для своего персонажа, вы можете отлично выделяться среди других!"
    },
    {
        "img": "2.png",
        'info': "Скины на предметы не снимают с него чары, а только накладывают сам скин."
    },
    {
        "img": "3.png",
        'info': "Подчеркните свою индивидуальность с помощью оригинальных украшений."
    },
    {
        "img": "4.png",
        'info': "Не упустите возможность выделиться из толпы и создать своего неповторимый образ!"
    },
]
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
      {sliderCards.map((item : any) => {
        return (<SwiperSlide className='swiperSlider'><img src={`/images/shopSlider/${item.img}`} alt="background image" /><p>{item.info}</p></SwiperSlide>)
      })}
      
    </Swiper>
  );
};