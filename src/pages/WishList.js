import Navigation from "../shared/components/Navigation.js";
import {resetUserSession} from "../service/AuthService";
import { useNavigate } from "react-router-dom";


const WishList = () =>{
       let navigate = useNavigate();
       const logoutHandler = () => {
         resetUserSession();
         navigate("/");
       };

       return(
         <div>
           <div className="text-center">
             <btn className="btn btn-warning mx-auto" onClick={logoutHandler}>
               Logout
             </btn>
           </div>
         </div>
       );
}
export default WishList;