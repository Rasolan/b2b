import React from 'react'
import "./input.css"

const Input = (props : any) => {
  return (
    <input placeholder={props.placeholder} type={props.type} className={props.className} />
  )
}

export default Input 