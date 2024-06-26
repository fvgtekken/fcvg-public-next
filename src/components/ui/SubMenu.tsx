import type { Menus, SubMenu as SubMenuData } from '@/utils/data'
import { ListMenu } from './ListMenu'

interface SubMenuProps {
  dept: number
  data: SubMenuData[]
  isActivated: boolean
  menuIndex: number
  setActiveLabel: (arg: string) => void
  activeLabel: { [key: string]: boolean }
}

export const SubMenu = ({
  dept,
  data,
  isActivated,
  menuIndex,
  activeLabel,
  setActiveLabel,
}: SubMenuProps) => {
  dept = dept + 1

  return (
    <ul className={`subMenu ${isActivated ? 'active' : 'close'}`}>
      {data.map((data: SubMenuData, index: number) => {
        const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`

        return (
          <ListMenu
            {...{
              activeLabel,
              setActiveLabel,
              dept,
              menuName,
              data,
            }}
            hasSubMenu={!!data.submenu}
            key={menuName}
            menuIndex={index}
          />
        )
      })}
    </ul>
  )
}
