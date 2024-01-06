import React from 'react'
import Image from 'next/image'
import MainCard from "$/public/images/mainCards/1.png"
import "./advantages.css"
const advantages = () => {
    return (
        <section className='advantages'>
            <div className="container advantages__container">
                <div className="advantages__cards">
                    <div className="advantages__card">
                        <Image width={500} height={500} className="advantages__image" src={MainCard} alt={'card image'}></Image>
                        <div className="advantages__info">
                            <div className="advantages__tags">
                                <div className="tag advantages__tag">Оптимизация</div>
                                <div className="tag advantages__tag">Оптимизация</div>
                            </div>
                            <p className="advantages__title">Система миров</p>
                            <p className="advantages__text">Чтобы уменьшить нагрузку на сервер мы разделили его на три мира: <br />- основной мир <br /> - мир ферм <br />- креатив мир <br />Таким образом, TPS сервера всегда стабилен - 20!</p>
                        </div>
                    </div>
                    <div className="advantages__card">
                        <div className="advantages__info">
                            <div className="advantages__tags">
                                <div className="tag advantages__tag">Оптимизация</div>
                                <div className="tag advantages__tag">Оптимизация</div>
                            </div>
                            <p className="advantages__title">Система миров</p>
                            <p className="advantages__text">Чтобы уменьшить нагрузку на сервер мы разделили его на три мира: <br />- основной мир <br /> - мир ферм <br />- креатив мир <br />Таким образом, TPS сервера всегда стабилен - 20!</p>
                        </div>
                        <Image width={500} height={500} className="advantages__image" src={MainCard} alt={'card image'}></Image>
                    </div>
                    <div className="advantages__card">
                        <Image width={500} height={500} className="advantages__image" src={MainCard} alt={'card image'}></Image>
                        <div className="advantages__info">
                            <div className="advantages__tags">
                                <div className="tag advantages__tag">Оптимизация</div>
                                <div className="tag advantages__tag">Оптимизация</div>
                            </div>
                            <p className="advantages__title">Система миров</p>
                            <p className="advantages__text">Чтобы уменьшить нагрузку на сервер мы разделили его на три мира: <br />- основной мир <br /> - мир ферм <br />- креатив мир <br />Таким образом, TPS сервера всегда стабилен - 20!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default advantages