import React from 'react'

interface Props {
  onClick?: (arg: any) => void
  className: string
  label: string
  style?: React.CSSProperties
}

const LabelMenu = ({ onClick, className, label, style }: Props) => {
  return (
    <span style={style} className={`${className}`} onClick={onClick}>
      {label}
    </span>
  )
}

export default LabelMenu
