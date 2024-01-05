import Link from 'next/link'
import React from 'react'
import './not-found.css'
const NotFound = () => {
    return (
        <section className='not-found'>
            <div className="not-found-box">
                <h1 className="not-found-title">404</h1>
                <div className="not-found-text">Данная страница не найдена</div>
                <Link className="button-outline not-found-button" href={'/'}>Вернуться на главную</Link>
            </div>

        </section>
    )
}

export default NotFound