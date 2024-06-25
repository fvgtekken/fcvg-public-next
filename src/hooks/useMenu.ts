import { useState } from 'react'

type ActiveMenus = string[]
interface Props {
  dept: number
}

interface UseMenu {
  stylePadding: React.CSSProperties
  rotateIcon: React.CSSProperties
  isActive?: boolean
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
      '--transform': rotateIcon === true ? 'rotate(0deg)' : 'rotate(180deg)',
    } as React.CSSProperties
    setRotateIcon(styleRotate)
  }

  const handleMenuClick = (menuName: string, data: any) => {
    // Show Data
    console.log('data', data)

    // Colpase expand submenu
    const isActive = activeMenus.includes(menuName)
    toggle(isActive)

    setActiveMenus((prevActiveMenus) => {
      if (prevActiveMenus.includes(menuName)) {
        // User makes clicks to colapse the menu

        // return prevActiveMenus.map((name) => name)
        return prevActiveMenus.filter((name) => name !== menuName)
      } else {
        // User makes clicks to expand add menu
        return [...prevActiveMenus, menuName]
      }
    })
    // Animate icon
  }

  return {
    stylePadding,
    rotateIcon,
    activeMenus,
    handleMenuClick,
  }
}
