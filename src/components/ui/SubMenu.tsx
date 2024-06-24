import { ListMenu } from "./ListMenu";


interface SubMenuProps {
  dept: number;
  data: any;
  toggle: boolean;
  menuIndex: number;
}
  
  export const SubMenu = ({ dept, data, toggle, menuIndex }: SubMenuProps) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <ul>
        {data.map((menu: any, index: number) => {
         
         const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}
      </ul>
    );
  };