import React from 'react'

import Image from 'next/image'
import UserLogin from "../../../public/svg/login-user.svg"

import "./formHeader.css"
const formHeader = () => {
    return (
        <div className="form__header">
            <div className="header__text">
                <div className="header__subtitle">Личный кабинет</div>
                <div className="header__title">Block2Box</div>
            </div>
            <Image alt="user login icon" src={UserLogin} className="header__image" />
        </div>
    )
}

export default formHeader