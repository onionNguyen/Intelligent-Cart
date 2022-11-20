import React from "react";
import Navigation from "../shared/components/Navigation.js";


const Product = (props) => { //create constant Product

    const {WithHeader} = props

    return (
      //basic layout. For project 5 will have actual products displayed
    <div>
      {WithHeader && <Navigation />}
    </div>
    );
  };



  

export default Product;