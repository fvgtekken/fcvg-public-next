import React, { ReactNode } from 'react'
import '../../style/components/ui/containerMenu.scss'

interface Props {
  className?: string;
  children: ReactNode; // Permite recibir cualquier tipo de children
}


const ContainerMenu = ({children, className}:Props) => {
  return (
    <aside className={className}>
        { children }
   </aside>
  )
}

export default ContainerMenu
