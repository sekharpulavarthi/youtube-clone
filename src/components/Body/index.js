import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex" id="bodyEl">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
