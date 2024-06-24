import { useState } from "react";
import { SubMenu } from "./SubMenu";
import IconMenu from "./IconMenu";
import '../../style/components/ui/listMenu.scss'
import LabelMenu from "./LabelMenu";

interface ListMenuProps {
  dept: number;
  data: any;
  hasSubMenu: number;
  menuName: string;
  menuIndex: number;
}

type ActiveMenus = string[];

export const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }: ListMenuProps) => {

const [activeMenus, setActiveMenus] = useState<ActiveMenus>([]);
const [rotateIcon, setRotateIcon] = useState<React.CSSProperties>({}) 

const stylePadding: React.CSSProperties = {
  '--padding-left': `${dept * 18}px`
} as React.CSSProperties;
 


const toggle = (rotateIcon:string)=> {
    const styleRotate: React.CSSProperties = {
      '--transform': rotateIcon === "true" ? 'rotate(0deg)' : 'rotate(180deg)'
    } as React.CSSProperties;
      setRotateIcon(styleRotate)
} 


  
  
  const handleMenuClick = (menuName: string, data: any) => {
    // Show Data
    console.log("data",data)

    // Animate icon
    const rotateIcon = activeMenus.includes(menuName).toString()
    toggle(rotateIcon)
    
    // Colpase expand submenu
    setActiveMenus((prevActiveMenus) => {
      if (prevActiveMenus.includes(menuName)) {
        // User makes clicks to colapse the menu
        return prevActiveMenus.filter((name) => name !== menuName);
      } else {
        // User makes clicks to expand add menu
        return [...prevActiveMenus, menuName];
      }
    });
  };

 

  
   return (<li>
        <div className={`item`} style={stylePadding} onClick={()=>handleMenuClick(menuName, data)} >
          <LabelMenu  {...{className:'menuLabel', label:data.label}}/>
          { hasSubMenu && (
              <IconMenu  {...{className:'arrow', rotateIcon}}></IconMenu>
          )}
        </div>
      { hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.submenu}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        />
      )}
    </li>
  );
}