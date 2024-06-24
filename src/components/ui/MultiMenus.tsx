import React from "react";
import type { Menus } from "@/utils/data";
import { ListMenu } from "./ListMenu";


const MultiMenus = ({ menus }: { menus: Menus[] }) => {
  
  return (
    <ul >
      {menus.map((menu: any, index: number) => {
        const dept = 1;
        const menuName: string = `sidebar-menu-${dept}-${index}`;

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

export default MultiMenus;
