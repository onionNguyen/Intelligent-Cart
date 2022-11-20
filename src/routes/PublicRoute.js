import React from "react";
import { Navigate, redirect ,Route} from "react-router-dom";
import { getToken } from "../service/AuthService";

const PublicRoute = ({children})=>{
    return !getToken() ? children : <Navigate to="/WishList" />;
}
export default PublicRoute;