import React from 'react'

interface Props {
    onClick?:( arg:any ) => void
    className:string
    label:string
}


const LabelMenu = ({ onClick, className, label }:Props) => {
  return (
    <span className={`${className}`} onClick={onClick}>{label}</span>
  )
}

export default LabelMenu
