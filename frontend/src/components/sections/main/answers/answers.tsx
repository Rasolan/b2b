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
                
            </div>
        </section>
    )
}

export default answers