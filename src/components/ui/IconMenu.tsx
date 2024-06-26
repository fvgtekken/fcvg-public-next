import { ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  onClick?: (arg?: any) => void
  rotateIcon: React.CSSProperties
  className?: string
  children: ReactNode
}

const IconMenu = ({ onClick, rotateIcon, className, children }: Props) => {
  return (
    <span className={`${className}`} onClick={onClick} style={rotateIcon}>
      {children}
    </span>
  )
}

export default IconMenu
