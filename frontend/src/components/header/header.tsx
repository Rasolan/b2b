'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/svg/logo.svg'

import "./header.css"
import NavMenu from '../navMenu/navMenu';
import Main from '$/public/svg/home.svg'
import Shop from '$/public/svg/shop.svg'
import Rules from '$/public/svg/rules.svg'
import Map from '$/public/svg/map.svg'
import Wiki from '$/public/svg/wiki.svg'

const Header = () => {

    return (
        <>
            <section className='header-mobile'>
                <NavMenu/>
            </section>
            <section className='header'>
                <div className="container header__container">
                    <Link className="header__logo" href={"/"}>
                        <Image alt='logo' src={Logo} />
                    </Link>
                    <ul className="header__nav-mobile">
                        <li>
                            <Image src={Main} alt={'icon'} ></Image>
                            <Link href={"/"}>Главная</Link>
                        </li>
                        <li>
                            <Image src={Shop} alt={'icon'} ></Image>
                            <Link href={"/shop"}>Магазин</Link>
                        </li>
                        <li>
                            <Image src={Rules} alt={'icon'} ></Image>
                            <Link href={"/wiki/rules"} >Правила</Link>
                        </li>
                        <li>
                            <Image src={Wiki} alt={'icon'} ></Image>
                            <Link href={"/wiki"}>Вики</Link>
                        </li>
                        <li>
                            <Image src={Map} alt={'icon'} ></Image>
                            <Link href={"/map"}>Карта</Link>
                        </li>
                    </ul>
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
                    <div className='NavMenu-Pc'><NavMenu /></div>

                </div>
            </section>
        </>
    )
}

export default Header