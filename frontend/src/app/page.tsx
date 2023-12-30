import Image from 'next/image'
import styles from './page.module.css'
import MainImage from "../../public/images/main-image.png"

import "./page.css"
export default function Home() {
  return (
    <>
      <section className='main'>
        <div className="container main__container">
          <div className="main__info">
            <h1 className="main__title">Передовой ванильный сервер с упором на выживание</h1>
            <h2 className="main__subtitle">Сервер с ванильным геймплеем, на котором основное внимание уделяеться на выживание и дополнением игровым контентом</h2>
            <div className="main__nav">
              <a href="" className="button main__link">Начать играть</a>
              <a href="" className="button-outline main__link">Как начать играть</a>
            </div>
            <p className="main__text">Java Edition 1.20.2 • Лицензия не обязательна</p>
          </div>
          <div className="main__image">
            <div className="image__blur">
              <Image width={500} className="image__icone" src={MainImage} alt={'main image'}></Image>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
