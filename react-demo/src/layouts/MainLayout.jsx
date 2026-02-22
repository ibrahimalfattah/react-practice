import NavBar from "../components/nav-bar";
import { Outlet } from "react-router-dom";
import React from "react";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
