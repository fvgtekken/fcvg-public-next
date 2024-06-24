'use client';
import type { Menus } from "@/utils/data";
import React, { useState } from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const LI = styled.li``;

interface StyledItem {
  $dept: number;
}

const Item = styled.div<StyledItem>`
  display: flex;
  padding: 12px 18px;
  padding-left: ${props => `${props.$dept * 18}px`};
  align-items: center;
`;
const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
  color: white;
`;

interface StyledArrow {
  $toggle: string;
}

const Arrow = styled.span<StyledArrow>`
  display: flex;
  height: 25px;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
    transform: ${props => (props.$toggle === "true" ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

interface ListMenuProps {
  dept: number;
  data: any;
  hasSubMenu: number;
  menuName: string;
  menuIndex: number;
}

interface SubMenuProps {
  dept: number;
  data: any;
  toggle: boolean;
  menuIndex: number;
}

type ActiveMenus = string[];

const MultiMenus = ({ menus }: { menus: Menus[] }) => {
  const [activeMenus, setActiveMenus] = useState<ActiveMenus>([]);

  const handleMenuClick = (data: any) => {
    console.log(data);
  };

  const handleArrowClick = (menuName: string) => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      const index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }
    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }: ListMenuProps) => (
    <LI>
      <Item $dept={dept}>
        <Label onClick={() => handleMenuClick(data)}>{data.label}</Label>
        {hasSubMenu && (
          <Arrow
            onClick={() => handleArrowClick(menuName)}
            $toggle={activeMenus.includes(menuName).toString()}
          />
        )}
      </Item>
      { hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.submenu}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        />
      )}
    </LI>
  );

  const SubMenu = ({ dept, data, toggle, menuIndex }: SubMenuProps) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <UL>
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
      </UL>
    );
  };

  return (
    <UL>
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
    </UL>
  );
};

export default MultiMenus;
