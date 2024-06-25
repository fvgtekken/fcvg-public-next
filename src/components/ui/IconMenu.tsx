interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  onClick?: (arg?: any) => void
  rotateIcon: React.CSSProperties
  className?: string
}

const IconMenu = ({ onClick, rotateIcon, className }: Props) => {
  return (
    <span
      className={`${className}`}
      onClick={onClick}
      style={rotateIcon}
    ></span>
  )
}

export default IconMenu
