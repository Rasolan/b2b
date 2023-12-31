"use client";
import Image from 'next/image'
import Link from 'next/link'
import Discord from "$/public/svg/discord.svg"
import Shared from "$/public/svg/shared.svg"

import "./answers.css"
import Accordion from '@/components/accordion/accordion';


const answers = () => {
    
    return (
        <section className='answers'>
            <div className="container answer__container">
                <div className="answers__info">
                    <div className="answers__title">Ответы на вопросы</div>
                    <Accordion></Accordion>
                </div>
                <div className="answers__discord">
                    <div className="answers__card">
                        <div className="answers__card-header">
                            <Link className="cards-header__icon" href={'/'}><Image src={Discord} alt={'discord icon'} ></Image></Link>
                            <Link className="cards-header__shared" href={'/'}><Image src={Shared} alt={'shared icon'} ></Image></Link>
                        </div>
                        <div className="cards-header__title">Остались вопросы?</div>
                        <div className="cards-header__text">Заходи в Discord сервер и задавай вопросы в канале поддержки. Сотрудники проекта обязательно вам помогут!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default answers