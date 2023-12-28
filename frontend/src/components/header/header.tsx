import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/svg/logo.svg'
import User from '../../../public/svg/user.svg'
import "./header.css"

const Header = () => {
  return (
    <section className='header'>
        <div className="container header__container">
            <Link className="header__logo" href={"/"}>
                <Image alt='logo' src={Logo}/>
            </Link>
            <ul className="header__nav">
                <li>
                    <Link href={"/"}>Магазин</Link>
                </li>
                <li>
                    <Link href={"/"} >Правила</Link>
                </li>
                <li>
                    <Link href={"/"}>Вики</Link>
                </li>
            </ul>
            <Link href={"/"}>
                <Image alt='user icon' src={User} className="header__user"/>
            </Link>
        </div>
    </section>
  )
}

export default Header