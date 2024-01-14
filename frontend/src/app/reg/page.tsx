import React from "react"
import Input from "@/components/input/input"
import FormHeader from "@/components/formHeader/formHeader"
import ButtonDiscord from "@/components/buttonDiscord/buttonDiscord"

import "./style.css"
import Link from 'next/link'
import MainSlider from '@/components/mainSlider/mainSlider'

const images = [
    {"url": "/mainSlider/1.png"},
    {"url": "/mainSlider/2.png"},
    {"url": "/mainSlider/3.png"},
    {"url": "/mainSlider/4.png"}
  ]
const Reg = () => {
    return (
        <section className="reg">
            <div className="container reg__container">
                <div className="reg__window">
                    <MainSlider imgs={images}></MainSlider>
                    <div className="reg__form">
                        <FormHeader/>
                        <ButtonDiscord></ButtonDiscord>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reg