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
import './shopMobileCategory.css'
import NavLink from '../navLink/navLink';
import { it } from 'node:test';

const categores = [
  {
    "title": "Наборы косметики",
    'link': "/shop"
  },
  {
    "title": "Спорт",
    'link': "/shop/sport"
  },
  {
    "title": "Рюкзаки",
    'link': "/shop/nag"
  },
  {
    "title": "Питомцы",
    'link': "/shop/pets"
  },
  {
  "title": "Частицы",
  'link': "/shop/particles"
  }
]
export default () => (
  <Swiper
    className='categorySlider'
    slidesPerView={2.5}

    freeMode={true}
  >
    {categores.map((item: any) => {
      return (<SwiperSlide className='swiperSlider'><NavLink exact activeClass=" category-btn-active" className="button category-btn" href={item.link}>{item.title}</NavLink></SwiperSlide>);
    })}
  </Swiper>
);