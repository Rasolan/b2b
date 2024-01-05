import React from 'react'
import type { PropsWithChildren } from 'react'

import NavLink from '@/components/navLink/navLink'

import './style.css'
import Link from 'next/link'
import Input from '@/components/input/input'
export default function Layout({children} : PropsWithChildren<unknown>) {
  return (
    <section className='wiki'>
        <div className="container wiki__container">
            <div className="wiki__sidebar">
                <div className="wiki__sidebar-nav">
                    <NavLink href="/wiki/about-server" exact activeClass=" wiki__sidebar-link-active"  className="wiki__sidebar-link">О сервере</NavLink>
                    <NavLink href="/wiki/commands" exact activeClass=" wiki__sidebar-link-active"  className="wiki__sidebar-link">Команды</NavLink>
                    <NavLink href="/wiki/start-to-play" exact activeClass=" wiki__sidebar-link-active"  className="wiki__sidebar-link">Начать играть</NavLink>
                    <NavLink href="/wiki/blocks-craftS" exact activeClass=" wiki__sidebar-link-active"  className="wiki__sidebar-link">Крафты блкоков</NavLink>
                </div>
                <Input placeholder="Поиск по вики" className="wiki__sidebar-search"></Input>
            </div>
            <div className="wiki__info"></div>
        </div>
    </section>
  )
}
