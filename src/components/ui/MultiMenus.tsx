'use client'
import React from 'react'
import type { Menus, SubMenu } from '@/utils/data'
import { ListMenu } from './ListMenu'
import { useActiveLabel } from '@/hooks/useActiveLabel'

const MultiMenus = ({ menus }: { menus: Menus[] }) => {
  const { activeLabel, setActiveLabel } = useActiveLabel('Menu 1')

  return (
    <ul>
      {menus.map((menu: SubMenu, index: number) => {
        const dept = 1
        const menuName: string = `sidebar-menu-${dept}-${index}`
        return (
          <ListMenu
            {...{ activeLabel, setActiveLabel, dept, menuName }}
            data={menu}
            hasSubMenu={!!menu.submenu}
            key={menuName}
            menuIndex={index}
          />
        )
      })}
    </ul>
  )
}

export default MultiMenus
