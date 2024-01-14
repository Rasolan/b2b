import React from 'react'


import "./style.css"
import FormHeader from '@/components/formHeader/formHeader'
import Input from '@/components/input/input'
import ButtonDiscord from '@/components/buttonDiscord/buttonDiscord'
import Link from 'next/link'
const Login = () => {
    return (
        <section className='login'>
            <div className="container login__container">
                <div className="login__form">
                    <FormHeader/>
                    <ButtonDiscord></ButtonDiscord>
                </div>
            </div>
        </section>
    )
}

export default Login