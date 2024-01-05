import React from 'react'

import Image from 'next/image'
import Skin from '$/public/images/shopCards/1.png'
import YellowTicket from "$/public/images/ticketYellow.png"
import '../style.css'
const Past = () => {
  return (
    <div className="account__buy-past">
      <div style={{backgroundImage: 'url(/images/shopCards/1.png)'}} className="account__buy-card">
        <div className="account__buy-blur"></div>
        <div className="account__buy-info">
          <div className="account__buy-icon">
            <Image  src={Skin} alt={''}></Image>
          </div>

          <div className="account__buy-title">Куринные крылышки</div>
          <div className="account__buy-subtitle">Куплено</div>
        </div>
      </div>
      <div style={{backgroundImage: 'url(/images/ticketYellow.png)'}} className="account__buy-card">
        <div className="account__buy-blur"></div>
        <div className="account__buy-info">
          <div className="account__buy-icon">
            <Image src={YellowTicket} alt={''}></Image>
          </div>

          <div className="account__buy-title">Проходка для друга</div>
          <div className="account__buy-subtitle">-60.00₽</div>
        </div>
      </div>
      <div style={{backgroundImage: 'url(/images/shopCards/1.png)'}} className="account__buy-card">
        <div className="account__buy-blur"></div>
        <div className="account__buy-info">
          <div className="account__buy-icon">
            <Image src={Skin} alt={''}></Image>
          </div>

          <div className="account__buy-title">Куринные крылышки</div>
          <div className="account__buy-subtitle">Куплено</div>
        </div>
      </div>
      
    </div>
    
    
  )
}

export default Past