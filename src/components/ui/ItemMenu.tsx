// ItemMenu.tsx
import React, { ReactNode } from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children: ReactNode; // Permite recibir cualquier tipo de children
}

const ItemMenu  = ({ className, style, onClick, children }:Props) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default ItemMenu;
