import React from "react";
import { Navigate, redirect, Route } from "react-router-dom";
import { getToken } from "../service/AuthService";

const PrivateRoute = ({ children }) => {
  return (getToken() ? children : <Navigate to="/Auth" />)
}
export default PrivateRoute;
