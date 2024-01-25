import React from 'react'
import { redirect } from 'next/navigation'
export default function buy() {
  redirect('/account/buy/active')
  return (
    <div>Buy</div>
  )
}
