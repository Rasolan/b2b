import React from 'react'
import type { PropsWithChildren } from 'react'

import AccountDashboard from '@/components/sections/account/dashboard/dashboard'
import AccountSidebar from '@/components/sections/account/sidebar/sidebar'

import './style.css'
import Link from 'next/link'
export default function Layout({children} : PropsWithChildren<unknown>) {
  return (
    <section className='account'>
        <div className="container account__container">
            <AccountDashboard/>
            <div className="account__main">
                <AccountSidebar/>
                {children}
            </div>
        </div>
    </section>
  )
}
