import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import User from '../../../public/svg/signIn.svg'
import Close from '$/public/svg/close.svg'
import LoginUser from '../../../public/svg/login-user.svg'
import LoginUserBlue from '../../../public/svg/login-user-blue.svg'
import Exit from '$/public/svg/exit.svg'
import SettingYellow from '$/public/svg/settingYellow.svg'
import './navMenu.css'
const NavMenu = () => {
    const [menuSate, setMenuState] = useState(false);
    return (
        <>
            <div onClick={() => { setMenuState(!menuSate) }} className={menuSate ? "nav-menu__Wrapper nav-menu__Wrapper-active" : "nav-menu__Wrapper"}></div>
            <div className='header__nav-menu'>
                <Image onClick={() => { setMenuState(!menuSate) }} alt='user icon' src={User} className="header__user" />
                <div className={menuSate ? "header__nav-card header__nav-card-active" : "header__nav-card"}>
                    <div className="header__nav-card-header">
                        <div className="header__nav-card-logo">
                            <Image src={LoginUserBlue} alt={'login user blue'}></Image>
                            <div className="header__nav-card-logo-info">
                                <p className="header__nav-card-logo-title">Личный кабинет</p>
                                <p className="header__nav-card-logo-subtitle">Block2box</p>
                            </div>
                        </div>
                        <div onClick={() => { setMenuState(!menuSate) }} className="header__nav-card-close"><Image src={Close} alt={'close btn'}></Image></div>
                    </div>
                    <ul onClick={() => { setMenuState(!menuSate) }}>
                        <li>
                            <Link href={'/account'}><Image height={27} width={27} src={LoginUser} alt={'login user'} />Личный кабинет</Link>
                        </li>
                        <li>
                            <Link href={'/account/settings'}><Image height={27} width={27} src={SettingYellow} alt={'settings yellow'} />Настройки</Link>
                        </li>
                        <li>
                            <Link href={'/login'}><Image height={27} width={27} src={Exit} alt={'exit'} />Выйти с аккаунта</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default NavMenu