import React from 'react'
import Image from 'next/image'
import DiscordIcon from "../../../public/svg/discord.svg"

import "./buttonDiscord.css"

const buttonDiscord = () => {
  return (
    <button className="button-discord form__button">Авторизуйтесь через Discord<Image src={DiscordIcon} alt='discord icon'></Image></button>
  )
}

export default buttonDiscord