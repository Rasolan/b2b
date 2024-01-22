"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ShopSlider from '@/components/shopSlider/shopSlider'
import ShopMobileCategory from '@/components/shopMobileCategore/shopMobileCategory'
import Key from "$/public/svg/key.svg"
import StarSvg from "@/components/svgs/star"

// import {ReactComponent as marketSvg} from "$/public/svg/market.svg"
import MarketSvg from "@/components/svgs/market"
import BallSvg from "@/components/svgs/ball"
import Close from '$/public/svg/close.svg'
import BagSvg from "@/components/svgs/bag"
import CarrotSvg from "@/components/svgs/carrot"
import ParticlesSvg from "@/components/svgs/particles"
import DollarSvg from "@/components/svgs/dollar"
import MagicSvg from "@/components/svgs/magic"
import Info from "$/public/svg/info.svg"
import ArrowPagination from "$/public/svg/arrowPagination.svg"
import "./style.css"
import Link from 'next/link'
import TicketYellow from '$/public/images/ticketYellow.png'
import TicketBlue from '$/public/images/ticketBlue.png'
import NavLink from '@/components/navLink/navLink';
const images = [
    { "url": "/shopSlider/1.png" },
    { "url": "/shopSlider/1.png" },
    { "url": "/shopSlider/1.png" },
    { "url": "/shopSlider/1.png" }
]
const marketCards = [
    {
        "img": "1.png",
        "sale": '1400',
        'title': "fAAA",
        'info': "fhjhfksg hghg g ahg h gagl hguweughkdsakg"
    },
    {
        "img": "2.png",
        "sale": '1050',
        'title': "AAadaA",
        'info': "fhjhfksg hghg g ahg h gagl hguweughkdsakg"
    },
    {
        "img": "3.png",
        "sale": '1200',
        'title': "AAdaA",
        'info': "fhjhfksg hghg g ahg h gagl hguweughkdsakg"
    },
    {
        "img": "4.png",
        "sale": '1100',
        'title': "AAdaA",
        'info': "fhjhfksg hghg g ahg h gagl hguweughkdsakg"
    },
    {
        "img": "1.png",
        "sale": '400',
        'title': "AdAA",
        'info': "fhjhfksg hghg g ahg h gagl hguweughkdsakg"
    },
]
const page = () => {
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage]: any = useState([4])
    const [shopCategory, setShopCategory] = useState("cosmetics")

    const lastCardIndec = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndec - cardsPerPage
    const currentCard = marketCards.slice(firstCardIndex, lastCardIndec)
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(marketCards.length / cardsPerPage); i++) {
        pageNumbers.push(i)
    }

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    const pageNext = () => currentPage < pageNumbers.length ? setCurrentPage(currentPage + 1) : currentPage
    const pagePrev = () => currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage


    const [notAutMenuSate, setnotAutMenuState] = useState(false);


    return (
        <section className='shop'>
            <div className="container shop__container">
                <div>
                    <div onClick={() => { setnotAutMenuState(!notAutMenuSate) }} className={notAutMenuSate ? "notAutMobile__Wrapper notAutMobile__Wrapper-active" : "notAutMobile__Wrapper"}></div>
                    <div className='notAutMobile'>
                        <div className={notAutMenuSate ? "notAutMobile-card notAutMobile-card-active" : "notAutMobile-card"}>
                            <div className="notAutMobile-card-header">
                                <div className="notAutMobile-card-logo">
                                    <Image src={Key} alt={'login user blue'}></Image>
                                    <div className="notAutMobile-card-logo-info">
                                        <p className="notAutMobile-card-logo-title">Вы не авторизованы</p>
                                    </div>
                                </div>
                                <div onClick={() => { setnotAutMenuState(!notAutMenuSate) }} className="notAutMobile-card-close"><Image src={Close} alt={'close btn'}></Image></div>
                            </div>
                            <div className="poppup-info">
                                Авторизируйтесь, чтобы купить товар и получить доступ к полному функционалу сайта
                            </div>
                            <Link href={'/login'} className='button'>Авторизиризоваться</Link>
                        </div>
                    </div>
                </div>
                <div className="shop__ad">
                    <div className="shop__ad-background">
                        <ShopSlider imgs={images} text={"t"}></ShopSlider>
                    </div>
                    <div className="shop__ad-text">Купи проходку себе получишь скидку в 40% для друга!
                    </div>
                </div>
                <div className="shop__notReg">
                    <Image className="notReg__icon" src={Key} alt={'not reg'}></Image>
                    <div className="notReg__info">
                        <div className="notReg__title">Вы не авторизированы</div>
                        <div className="notReg__text">Авторизируйтесь, чтобы купить товар и получить доступ к полному функционалу сайта</div>
                    </div>
                    <div className="notReg__buttons">
                        <Link href={"/"} className=" notReg__btn">не показывать</Link>
                        <Link href={"/login"} className="button notReg__btn">Авторизоваться</Link>
                    </div>
                </div>
                <div className="shop__content">
                    <div className="shop-mobileCategory-title">Категории товаров</div>
                    <ShopMobileCategory></ShopMobileCategory>
                    <div className={shopCategory === "cosmetics" ? 'shop__sidebar shop__sidebar-cosmetics' : 'shop__sidebar'}>
                        <div className="shop__sidebar-header"><p>Категории</p></div>
                        <div className="shop__sidebar-content">
                            <div onClick={() => setShopCategory('cosmetics')} className={shopCategory === "cosmetics" ? 'shop__sidebar-title shop__sidebar-title-active' : 'shop__sidebar-title'}> <StarSvg />Косметика</div>
                            <ul className='shop__sidebar-nav'>
                                <li>
                                    <NavLink activeClass=' shop__sidebar-link-active' exact className="shop__sidebar-link" href={'/shop/pack'}><MarketSvg />Набор косметики</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClass=' shop__sidebar-link-active' exact className="shop__sidebar-link" href={'/shop/sport'}><BallSvg />Спорт</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClass=' shop__sidebar-link-active' exact className="shop__sidebar-link" href={'/shop/bag'}><BagSvg />Рюкзак</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClass=' shop__sidebar-link-active' exact className="shop__sidebar-link" href={'/shop/pets'}><CarrotSvg />Питомцы</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClass=' shop__sidebar-link-active' exact className="shop__sidebar-link" href={'/shop/particles'}><ParticlesSvg />Частицы</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={shopCategory === "ticket" ? 'shop__sidebar-footer shop__sidebar-footer-active' : 'shop__sidebar-footer'}>
                            <div className='shop__sidebar-footer-skin'><MagicSvg />Скины на предметы</div>
                            <div className='shop__sidebar-footer-ticket' onClick={() => setShopCategory('ticket')}><DollarSvg />Проходка на сервер</div>
                        </div>
                    </div>
                    <div className="shop__market">
                        <div className="shop__tickets">
                            <div className="shop__ticket shop__ticket-yellow">
                                <div className="shop__ticket-icon"><Image src={TicketYellow} alt={'ticket'}></Image></div>
                                <div className="shop__ticket-title">Проходка для друга</div>
                                <div className="shop__ticket-buy">
                                    <div className="button shop__ticket-info"><Image height={30} width={30} src={Info} alt={'info'}></Image></div>
                                    <div className="button">Купить  60р</div>
                                </div>
                            </div>
                            <div className="shop__ticket shop__ticket-blue">
                                <div className="shop__ticket-icon"><Image src={TicketBlue} alt={'ticket'}></Image></div>
                                <div className="shop__ticket-title">Проходка на сервер</div>
                                <div className="shop__ticket-buy">
                                    <div className="button shop__ticket-info"><Image height={30} width={30} src={Info} alt={'info'}></Image></div>
                                    <div className="button">Купить 100р</div>
                                </div>
                            </div>
                        </div>
                        <div className="shop__cards">
                            {currentCard.map((item) => (
                                <div style={{
                                    backgroundImage: `url('/images/shopCards/${item.img}')`
                                }} className="shop__card">
                                    <div className="shop__card-blur"></div>
                                    <div className="shop__card-image">
                                        <img className="shop__card-icon" src={`/images/shopCards/${item.img}`} alt={item.title}></img>
                                    </div>
                                    <div className="shop__card-title">{item.title}</div>
                                    <div className="shop__card-buy">
                                        <div onClick={() => { setnotAutMenuState(!notAutMenuSate) }} className="button-yellow shop__card-button">Купить {item.sale}₽</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='shop__pagination'>
                            <Image onClick={() => pagePrev()} className='arrowPagination ' src={ArrowPagination} alt={'arrow pagination'}></Image>
                            {pageNumbers.map((item) => (
                                <p className={currentPage === item ? "active" : ""} onClick={() => paginate(item)}>{item}</p>
                            ))}
                            <Image onClick={() => pageNext()} className='arrowPagination arrowPagination-left' src={ArrowPagination} alt={'arrow pagination'}></Image>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default page