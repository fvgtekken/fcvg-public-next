import { useState } from 'react'

type ActiveMenus = string[]
interface Props {
  dept: number
}

interface UseMenu {
  stylePadding: React.CSSProperties
  rotateIcon: React.CSSProperties

  activeMenus: ActiveMenus
  handleMenuClick: (menuName: string, data: any) => void
}

export const useMenu = ({ dept }: Props): UseMenu => {
  const [activeMenus, setActiveMenus] = useState<ActiveMenus>([])
  const [rotateIcon, setRotateIcon] = useState<React.CSSProperties>({})

  const stylePadding: React.CSSProperties = {
    '--padding-left': `${dept * 18}px`,
  } as React.CSSProperties

  const toggle = (rotateIcon: boolean) => {
    const styleRotate: React.CSSProperties = {
      '--transform': rotateIcon === true ? 'rotate(0deg)' : 'rotate(90deg)',
    } as React.CSSProperties
    setRotateIcon(styleRotate)
  }

  const handleMenuClick = (menuName: string, data: any) => {
    // Colpase expand submenu
    const isActive = activeMenus.includes(menuName)
    // Animate icon
    toggle(isActive)

    setActiveMenus((prevActiveMenus) => {
      if (prevActiveMenus.includes(menuName)) {
        return prevActiveMenus.filter((name) => name !== menuName)
      } else {
        return [...prevActiveMenus, menuName]
      }
    })
  }

  return {
    stylePadding,
    rotateIcon,
    activeMenus,
    handleMenuClick,
  }
}
