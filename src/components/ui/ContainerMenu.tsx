import React, { ReactNode } from 'react'
import '../../style/components/ui/containerMenu.scss'

interface Props {
  className?: string
  children: ReactNode
}

const ContainerMenu = ({ children, className }: Props) => {
  return <aside className={className}>{children}</aside>
}

export default ContainerMenu
