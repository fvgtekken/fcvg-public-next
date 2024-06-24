

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  onClick?:(arg?:any)=>void;
  rotateIcon :React.CSSProperties 
  className?: string;
}

const IconMenu: React.FC<IconProps> = ({ onClick, rotateIcon, className }) => {
  
    return (
        <span className={`${className}`}  onClick={onClick} style={rotateIcon}>
       </span>
  );
};

export default IconMenu;
