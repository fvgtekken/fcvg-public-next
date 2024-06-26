import React, { ReactNode } from 'react'
import { siteFont } from '@/config/fonts'
import '../../style/components/ui/containerMenu.scss'

interface Props {
  className?: string
  children: ReactNode
}

const ContainerMenu = ({ children, className }: Props) => {
  return (
    <aside className={`${className} ${siteFont.className}`}>{children}</aside>
  )
}

export default ContainerMenu
