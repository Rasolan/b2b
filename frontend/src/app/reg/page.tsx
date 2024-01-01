import React from "react"
import Input from "@/components/input/input"
import FormHeader from "@/components/formHeader/formHeader"
import ButtonDiscord from "@/components/buttonDiscord/buttonDiscord"

import "./style.css"
import Link from 'next/link'
import MainSlider from '@/components/mainSlider/mainSlider'

const images = [
    {"url": "/mainSlider/1.png"},
    {"url": "/mainSlider/2.png"},
    {"url": "/mainSlider/3.png"},
    {"url": "/mainSlider/4.png"}
  ]
const Reg = () => {
    return (
        <section className="reg">
            <div className="container reg__container">
                <div className="reg__window">
                    <MainSlider imgs={images}></MainSlider>
                    <div className="reg__form">
                        <FormHeader/>
                        <Input placeholder="Введите логин" type="text" className="form__input"></Input>
                        <Input placeholder="Введите ник Minecraft" type="text" className="form__input"></Input>
                        <Input placeholder="Введите пароль" type="text" className="form__input"></Input>
                        <Input placeholder="Подтвердите пароль" type="text" className="form__input"></Input>
                        <div className="capchs">Google capcha when back-end</div>
                        <div className="form__line"></div>
                        <ButtonDiscord></ButtonDiscord>
                        <div className="form__line"></div>
                        <Link href={'/reg'} className="button form__button">Создать аккаунт</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reg