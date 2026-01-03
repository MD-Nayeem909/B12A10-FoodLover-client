import React from "react";

const Button = ({ children, className }) => {
  return (
    <div
      className={`transition-all duration-300 shadow-none ease-in-out overflow-hidden btn rounded-bl-3xl rounded-tl-sm rounded-br-sm rounded-tr-3xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
