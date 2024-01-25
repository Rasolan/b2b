import React from 'react'
import Link from 'next/link'
import './footer.css'
const Footer = () => {
  return (
    <section className='footer'>
      <div className="container footer__container">
        <div className="footer__info">
          <div className="footer__rules">
            <Link href={"/"}>Правила для платформ</Link>
            <Link href={"/"}>Политика конфиденциальности</Link>
          </div>
          <div className="footer__rights">Вся размещенная информация на сайте не является публичной офертой. We are in no way affiliated with or endorsed by Mojang, AB.</div>
        </div>
        <div className="footer__logo">Design made by <span>Rasolan</span></div>
      </div>
    </section>
  )
}

export default Footer