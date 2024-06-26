import React from 'react'
import type { Menus } from '@/utils/data'
import { SubMenu } from './SubMenu'
import LabelMenu from './LabelMenu'
import { useMenu } from '@/hooks/useMenu'
import ItemMenu from './ItemMenu'
import IconMenu from './IconMenu'
import { RiArrowRightSLine } from 'react-icons/ri'
import '../../style/components/ui/listMenu.scss'

interface ListMenuProps {
  dept: number
  data: Menus
  hasSubMenu: boolean
  menuName: string
  menuIndex: number
  className?: string
  setActiveLabel: (arg: string) => void
  activeLabel: { [key: string]: boolean }
}

export const ListMenu = ({
  dept,
  data,
  hasSubMenu,
  activeLabel,
  menuName,
  menuIndex,
  setActiveLabel,
}: ListMenuProps) => {
  const { stylePadding, rotateIcon, activeMenus, handleMenuClick } = useMenu({
    dept,
  })

  const isActivated = activeMenus.includes(menuName)
  const activeStyle = activeLabel[`${data.label}`]

  return (
    <li>
      <ItemMenu
        className={`item`}
        style={stylePadding}
        onClick={() => {
          handleMenuClick(menuName, data)
          setActiveLabel(data.label)
        }}
      >
        <LabelMenu
          className={`menuLabel ${activeStyle ? 'active' : ''}`}
          label={data.label}
        />
        {hasSubMenu && (
          <IconMenu className={'arrow'} rotateIcon={rotateIcon}>
            <RiArrowRightSLine />
          </IconMenu>
        )}
      </ItemMenu>

      {hasSubMenu && (
        <SubMenu
          {...{ activeLabel, setActiveLabel, dept, menuIndex, isActivated }}
          data={data.submenu ?? []}
        />
      )}
    </li>
  )
}
