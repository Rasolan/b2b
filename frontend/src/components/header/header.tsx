'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/svg/logo.svg'
import User from '../../../public/svg/user.svg'
import LoginUser from '../../../public/svg/login-user.svg'
import Exit from '$/public/svg/exit.svg'
import SettingYellow from '$/public/svg/settingYellow.svg'
import "./header.css"


const Header = () => {
    const [menuSate, setMenuState] = useState(false);
    return (
        <section className='header'>
            <div className="container header__container">
                <Link className="header__logo" href={"/"}>
                    <Image alt='logo' src={Logo} />
                </Link>
                <ul className="header__nav">
                    <li>
                        <Link href={"/shop"}>Магазин</Link>
                    </li>
                    <li>
                        <Link href={"/wiki/rules"} >Правила</Link>
                    </li>
                    <li>
                        <Link href={"/wiki"}>Вики</Link>
                    </li>
                    <li>
                        <Link href={"/map"}>Карта</Link>
                    </li>
                </ul>
                <div onClick={() => { setMenuState(!menuSate) }} className='header__nav-menu'>
                    <Image alt='user icon' src={User} className="header__user" />
                    <div className={menuSate ? "header__nav-card header__nav-card-active" : "header__nav-card"}>
                        <ul>
                            <li>
                                
                                <Link href={'/account'}><Image height={27} width={27} src={LoginUser} alt={'login user'}/>Личный кабинет</Link>
                            </li>
                            <li>
                                <Link href={'/account/settings'}><Image height={27} width={27} src={SettingYellow} alt={'settings yellow'}/>Настройки</Link>
                            </li>
                            <li>
                                <Link href={'/login'}><Image height={27} width={27} src={Exit} alt={'exit'}/>Выйти с аккаунта</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header