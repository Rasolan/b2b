import Link from 'next/link'
import React from 'react'
import NavLink from '@/components/navLink/navLink' 
import Image from 'next/image'
import Pocket from '$/public/svg/pocket.svg'
import ShopingCart from '$/public/svg/shopingCart.svg'
import TimePast from '$/public/svg/timePast.svg'
import Setting from '$/public/svg/setting.svg'
import './sidebar.css'
const sidebar = () => {
    return (
        <div className="account__sidebar">
            <div className="account__sidebar-title">Категории</div>
            <div className="account__sidebar-nav">
                <NavLink activeClass=" navLink-active" exact className="account__sidebar-category" href={'/account/buy'}><Image height={32} width={32} src={Pocket} alt={'pocket'}/> Мои покупки</NavLink>
                <ul className="account__sidebar-subcategory">
                    <li>
                        <NavLink activeClass=" subcategory-active" exact href={'/account/buy/active'}><Image height={24} width={24} src={ShopingCart} alt={'shoping cart'}/>Активные покупки</NavLink>
                    </li>
                    <li>
                        <NavLink activeClass=" subcategory-active" exact href={'/account/buy/past'}><Image height={24} width={24} src={TimePast} alt={'time past'}/>История покупок</NavLink>
                    </li>
                </ul>
            </div>
            <div className="account__sidebar-nav">
                <NavLink activeClass=" navLink-active" exact className="account__sidebar-category" href={'/account/settings'}><Image height={32} width={32} src={Setting} alt={'setting'}/>Настройки аккаунта</NavLink>
            </div>
        </div>
    )
}

export default sidebar