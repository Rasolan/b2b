import React from 'react'
import Image from 'next/image'
import About from "$/public/images/about.png"
import "./about.css"
const about = () => {
    return (
        <section className='about'>
            <div className="container about__container">
                <div className="about__info">
                    <h3 className="about__title">Приватный сервер</h3>
                    <p className="about__subtitle">Это место, где постоянно происходит насыщенная и захватывающая жизнь среди сообщества сервера. Основным принципом приватного сервера является взаимное доверие игроков.</p>
                    <div className="about__text">Мы блокируем гриферов, а повреждённые постройки восстанавливаем как можно быстрее.</div>
                </div>
                <div className="about__image">
                    <div className="about__blur"></div>
                    <Image className="about__img" src={About} alt={'about image'}></Image>
                </div>

            </div>
        </section>
    )
}

export default about