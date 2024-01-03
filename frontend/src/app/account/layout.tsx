import React from 'react'
import type { PropsWithChildren } from 'react'
import Image from 'next/image'
import LoginUser from '$/public/svg/login-user.svg'
import CardIcon from '$/public/images/card-icon.png'
import Skin from '$/public/images/skin.png'

import './style.css'
export default function Layout({children} : PropsWithChildren<unknown>) {
  return (
    <section className='account'>
        <div className="container account__container">
            <div className="account__dashboard">
                <div className="dashboard__title">
                    <Image height={81} width={81} className="dashboard__title-image" src={LoginUser} alt={'login user'}/>
                    <div className="dashboard__title-info">
                        <h1>Личный кабинет</h1>
                        <h2>Block2Box</h2>
                    </div>
                </div>
                <div className="dashboard__info">
                    <div className="dashboard__card">
                        <div className="dashboard__card-row">
                            <Image width={29} height={32} className="dashboard__card-icon" src={CardIcon} alt={'card icon'}></Image>
                            <div className="dashboard__card-balance">₽ 1,000.00</div>
                        </div>
                        <div className="dashboard__card-row">
                            <div className="dashboard__card-numbers">•••• •••• •••• 8768</div>
                            <div className="dashboard__card-code">                                
                                <p>VALID THRU</p>
                                <div className='dashboard__card-date'>12/22</div>
                            </div>
                        </div>
                        <div className="button-outline dashboard__card-button">Пополнить баланс</div>
                    </div>
                    <div className="dashboard__profile">
                        <div className="profile__icon">
                            <Image height={81} width={81} src={Skin} alt={'skin'}></Image>
                        </div>
                        <div className="profile__nickname">Rasolan</div>
                        <div className="button profile__button">Игрок</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
