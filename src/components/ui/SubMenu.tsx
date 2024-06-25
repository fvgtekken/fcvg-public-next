import { ListMenu } from './ListMenu'

interface SubMenuProps {
  dept: number
  data: any
  toggle: boolean
  menuIndex: number
}

export const SubMenu = ({ dept, data, toggle, menuIndex }: SubMenuProps) => {
  dept = dept + 1

  return (
    <ul className={`subMenu ${toggle ? 'active' : 'close'}`}>
      {data.map((menu: any, index: number) => {
        const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`

        return (
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.submenu}
            menuName={menuName}
            key={menuName}
            menuIndex={index}
          />
        )
      })}
    </ul>
  )
}
