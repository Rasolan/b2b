"use client";
import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import MainSlider from '@/components/mainSlider/mainSlider'
import Key from "$/public/svg/key.svg"
import Star from "$/public/svg/star.svg"
import Market from "$/public/svg/market.svg"
import Ball from "$/public/svg/ball.svg"
import Bag from "$/public/svg/bag.svg"
import Carrot from "$/public/svg/carrot.svg"
import Particles from "$/public/svg/particles.svg"
import Dollar from "$/public/svg/dollar.svg"
import Info from "$/public/svg/info.svg"
import ArrowPagination from "$/public/svg/arrowPagination.svg"
import "./style.css"
import Link from 'next/link'
import { url } from 'inspector';
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
    return (
        <section className='shop'>
            <div className="container shop__container">
                <div className="shop__ad">
                    <div className="shop__ad-background">
                        <MainSlider imgs={images}></MainSlider>
                        <div className="shop__ad-title">Купив себе косметические украшения для своего персонажа, вы можете отлично выделяться среди других!</div>
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
                    <div className="shop__sidebar">
                        <div className="shop__sidebar-header"><p>Категории</p></div>
                        <div className="shop__sidebar-content">
                            <div className="shop__sidebar-title"><Image src={Star} alt={'star'} />Косметика</div>
                            <ul className="shop__sidebar-nav">
                                <li>
                                    <Link className="shop__sidebar-link" href={''}><Image src={Market} alt={'market'} />Набор косметики</Link>
                                </li>
                                <li>
                                    <Link className="shop__sidebar-link" href={''}><Image src={Ball} alt={'ball'} />Спорт</Link>
                                </li>
                                <li>
                                    <Link className="shop__sidebar-link" href={''}><Image src={Bag} alt={'bag'} />Рюкзак</Link>
                                </li>
                                <li>
                                    <Link className="shop__sidebar-link" href={''}><Image src={Carrot} alt={'carrot'} />Питомцы</Link>
                                </li>
                                <li>
                                    <Link className="shop__sidebar-link" href={''}><Image src={Particles} alt={'particles'} />Частицы</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="shop__sidebar-footer"><div><Image src={Dollar} alt={'dollar'}></Image>Проходка на сервер</div></div>
                    </div>
                    <div className="shop__market">
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
                                        <div className="button shop__card-button">Купить {item.sale}₽</div>
                                        <div className="button shop__card-info"><Image height={30} width={30} src={Info} alt={'info'}></Image></div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        <div className='shop__pagination'> 
                            <Image onClick={()=> pagePrev()} className='arrowPagination ' src={ArrowPagination} alt={'arrow pagination'}></Image>
                            {pageNumbers.map((item) => (
                                <p className={ currentPage === item ? "active" : ""} onClick={() => paginate(item)}>{item}</p>
                            ))}
                            <Image onClick={()=> pageNext()} className='arrowPagination arrowPagination-left' src={ArrowPagination} alt={'arrow pagination'}></Image>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default page