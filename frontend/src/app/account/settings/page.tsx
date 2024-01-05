import React from 'react'
import Input from '@/components/input/input'
import './style.css'
const page = () => {
  return (
    <div className="account__settings">
      <div className="account__settings-card account__settings-info">
        <div className="account__settings-title">информация Аккаунта</div>
        <div className="account__settings-text">Логин: Rasolan</div>
        <div className="account__settings-text">Ник Minecraft : Rasolan4k</div>
        <div className="account__settings-text">Роль: Игрок</div>
        <div className="account__settings-text">Дата регистрации: 24.11.2020 в 10:25</div>
        <div className="account__settings-text">Имя: Григорий</div>
        <div className="account__settings-text">Фамилия: Макаров</div>
      </div>
      <div className="account__settings-card account__settings-change">
        <div className="account__settings-form">
          <div className="account__settings-title">Личная информация</div>
          <Input placeholder='Имя' className="input account__settings-input"/>
          <Input placeholder='Фамилия' className="account__settings-input"/>
        </div>
        <div className="account__settings-form">
          <div className="account__settings-title">Смена Пароля</div>
          <Input placeholder='Старый пароль' className="account__settings-input"/>
          <Input placeholder='Новый пароль' className="account__settings-input"/>
          <Input placeholder='Подтвердите пароль' className="account__settings-input"/>
        </div>
        <div className="button account__settings-button">Подтвердить изменения</div>
      </div>
    </div>
  )
}

export default page