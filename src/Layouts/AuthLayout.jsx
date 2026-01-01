import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/navbar/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-65px)] flex items-center justify-center">
        <Outlet/>
      </main>
    </div>
  );
};

export default AuthLayout;
