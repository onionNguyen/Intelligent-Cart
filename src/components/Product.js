import React from "react";
import Footer from "../components/Footer.js"
import Navigation from "../shared/components/Navigation.js";
import Product_data from "../components/Product_data.json";

const Product = (props) => { //create constant Product

    const {WithHeader} = props

    return (
      //basic layout. For project 5 will have actual products displayed
    <div>
      {WithHeader && <Navigation />}
      <Product_data />
      <Footer />
    </div>
    );
  };

  

export default Product;