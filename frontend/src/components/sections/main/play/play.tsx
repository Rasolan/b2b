import React from 'react'
import Link from 'next/link'
import './play.css'
const play = () => {
    return (
        <section className='play'>
            <div className="container play__container">
                <h4 id='readyToPlay' className="play__title">Готовы начать играть?</h4>
                <p className="play__text">Жмите на кнопку, чтобы податься заяку через Discord или купить проходку</p>
                <div className="play__cards">
                    <div className="play__card play__card-blue">
                        <p className="play__card-title">Проходка на сервер</p>
                        <ul className="play__card-info">
                            <li>Моментальный вход на сервер</li>
                            <li>Доступ ко всему функционалу сервера</li>
                            <li>Minecraft Java Edition 1.20.1</li>
                            <li>Доступ ко всем сезонам</li>
                        </ul>
                        <Link className="button-white play__card-button" href={'/'}>Купить проходку за 100₽</Link>
                    </div>
                    <div className="play__card">
                        <p className="play__card-title">Подача заявки</p>
                        <ul className="play__card-info">
                            <li>Ожидание приёма заявки</li>
                            <li>Доступ ко всему функционалу сервера</li>
                            <li>Minecraft Java Edition 1.20.1</li>
                            <li>Доступ на 2 сезона</li>
                        </ul>
                        <Link className="button-outline play__card-button" href={'/'}>Подать заявку</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default play