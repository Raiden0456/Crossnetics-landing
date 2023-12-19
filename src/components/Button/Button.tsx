import React from 'react';

interface ButtonProps {
  paddingX?: string;
  paddingY?: string;
  bgColor?: string;
  textColor?: string;
  width?: string;
  icon?: string; 
  onClick?: () => void;
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ paddingX = "px-2", paddingY = "py-1", textColor = "text-blue-500", bgColor = "bg-white", width = "w-full", icon, onClick, buttonText }) => {
  return (
    <div
      onClick={onClick}
      className={`${paddingX} ${paddingY} ${bgColor} ${width} rounded-2xl justify-center items-center inline-flex cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
    >
      <div className={`${textColor} text-xs font-extrabold uppercase flex flex-row gap-2 items-center justify-center`}>
        {icon && <img src={icon} alt="icon" width={15} height={15} />}
        {buttonText}
      </div>
    </div>
  );
};

export default Button;
