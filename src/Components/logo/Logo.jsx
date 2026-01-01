import React from "react";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <div>
      <NavLink to="/" className="flex items-center font-bold text-lg sm:text-xl lg:text-2xl">
        <img src="/FoodLover.png" alt="" className="w-12" />
        Food<span className="text-secondary">Lover</span>
      </NavLink>
    </div>
  );
};

export default Logo;
