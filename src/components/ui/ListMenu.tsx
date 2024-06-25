'use client'
import React, { useState } from 'react'
import { SubMenu } from './SubMenu'
import IconMenu from './IconMenu'
import LabelMenu from './LabelMenu'
import { useMenu } from '@/hooks/useMenu'
import ItemMenu from './ItemMenu'
import '../../style/components/ui/listMenu.scss'

interface ListMenuProps {
  dept: number
  data: any
  hasSubMenu: number
  menuName: string
  menuIndex: number
  className?: string
}

export const ListMenu = ({
  dept,
  data,
  hasSubMenu,
  menuName,
  menuIndex,
}: ListMenuProps) => {
  const { stylePadding, rotateIcon, activeMenus, handleMenuClick } = useMenu({
    dept,
  })

  const isActivated = activeMenus.includes(menuName)
  return (
    <li>
      <ItemMenu
        className={'item'}
        style={stylePadding}
        onClick={() => {
          handleMenuClick(menuName, data)
        }}
      >
        <LabelMenu className={'menuLabel'} label={data.label} />
        {hasSubMenu && <IconMenu className={'arrow'} rotateIcon={rotateIcon} />}
      </ItemMenu>

      {hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.submenu}
          toggle={isActivated}
          menuIndex={menuIndex}
        />
      )}
    </li>
  )
}
