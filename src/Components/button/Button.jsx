import React from "react";

const Button = ({ children, className }) => {
  return (
    <div
      className={`transition-all duration-300 shadow-none ease-in-out overflow-hidden btn rounded-bl-4xl rounded-tl-sm rounded-br-sm rounded-tr-4xl hover:scale-105 ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
