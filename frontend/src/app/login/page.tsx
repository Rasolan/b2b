import React from 'react'
import Image from 'next/image'
import UserLogin from "../../../public/svg/login-user.svg"
import DiscordIcon from "../../../public/svg/discord.svg"

import "./style.css"
const Login = () => {
    return (
        <section className='login'>
            <div className="container login__container">
                <div className="login__form">
                    <div className="form__header">
                        <div className="header__text">
                            <div className="header__subtitle">Личный кабинет</div>
                            <div className="header__title">Block2Box</div>
                        </div>
                        <Image alt="user login icon" src={UserLogin} className="header__image" />
                    </div>
                    <input placeholder='Введите логин' type="text" className="form__input" />
                    <input placeholder='Введите пароль' type="password" className="form__input" />
                    <div className="form__buttons">
                        <button className="button form__button">Авторизоваться</button>
                        <button className="button-outline form__button">Регистрация</button>
                    </div>

                    <div className="form__line"></div>
                    <button className="button-discord form__button">Авторизуйтесь через Discord<Image src={DiscordIcon} alt='discord icon'></Image></button>
                </div>
            </div>
        </section>
    )
}

export default Login