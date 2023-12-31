import React, { useState } from 'react'
import Image from 'next/image'
import Arrow from '$/public/svg/arrow.svg'
import './accordion.css'


const questions = [
    {
        "question": "Куда мне отдать свои деньги?",
        "answer": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.."
    },
    {
        "question": "Куда мне отдать свои деньги?",
        "answer": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.."
    }
]
const accordion = () => {
    const [activeId, setActiveId] = useState(null)
    const ClickAccordion = (id: any) => {
        if (id === activeId) setActiveId(null);
        else setActiveId(id);
        console.log("d");
    }
    return (
        <div className="answers__accordions">
            {questions.map((FAQitem, id) => {
                return (
                    <div key={id} className="answers__accordion">
                        <div onClick={() => ClickAccordion(id)} className="accordion__question"><Image className={`accordion__arrow ${id === activeId ? "accordion__arrow-active" : ""}`} src={Arrow} alt={'arrow'}></Image>{FAQitem.question}</div>
                        <div className={`accordion__answer ${id === activeId ? "accordion__answer-open" : "accordion__answer-close"}`}>{FAQitem.answer}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default accordion