import React from "react";

const Button = ({ children, className }) => {
  return (
    <div
      className={`btn btn-primary btn-outline transition-all duration-300 shadow-none ease-in-out overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
