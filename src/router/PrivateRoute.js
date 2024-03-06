import React from "react";
import { Outlet } from "react-router-dom";
import Common from "../components/layout/Common";

const PrivateRoute = ({ children }) => {
  
  return <Common><Outlet data={"hello"} /></Common>;
};

export default PrivateRoute;