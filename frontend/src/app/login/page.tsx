import React from 'react'


import "./style.css"
import FormHeader from '@/components/formHeader/formHeader'
import Input from '@/components/input/input'
import ButtonDiscord from '@/components/buttonDiscord2/buttonDiscord'
import Link from 'next/link'
const Login = () => {
    return (
        <section className='login'>
            <div className="container login__container">
                <div className="login__form">
                    <FormHeader/>
                    <Input placeholder="Введите логин" type="text" className="form__input"></Input>
                    <Input placeholder="Введите пароль" type="password" className="form__input"></Input>
                    <div className="form__buttons">
                        <Link href={'/login'} className="button form__button">Авторизоваться</Link>
                        <Link href={"/reg"} className="button-outline form__button">Регистрация</Link>
                    </div>

                    <div className="form__line"></div>
                    <ButtonDiscord></ButtonDiscord>
                </div>
            </div>
        </section>
    )
}

export default Login