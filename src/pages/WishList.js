import Navigation from "../shared/components/Navigation.js";
import {resetUserSession} from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import ProductData from "../components/Product_data.json";
import React from "react";

const WishList = () =>{
       let navigate = useNavigate();
       const logoutHandler = () => {
         resetUserSession();
         navigate("/");
       };

       return(
        <React.Fragment>
          <Navigation />
         <div>
           <div className="text-center">
             <btn className="btn btn-warning mx-auto" onClick={logoutHandler}>
               Logout
             </btn>
           </div>
         </div>
         </React.Fragment>
       );
}
export default WishList;