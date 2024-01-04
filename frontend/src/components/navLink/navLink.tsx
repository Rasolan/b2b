'use client'
 
/*
NavLink: by default the active class is added when the href matches the start of the URL pathname.
Use the exact property to change it to an exact match with the whole URL pathname.
 
*/
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
 
const NavLink = ({activeClass, href, exact, children, ...props } : any) => {
  const pathname = usePathname()
  const active = activeClass
  console.log("path is" + pathname+"  link is "+ href)
  const isActive = exact ? pathname.startsWith(href) : ""
  if (isActive) {
    props.className += active
  }
 
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}
export default NavLink