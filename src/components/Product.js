import React from "react";
import Navigation from "../shared/components/Navigation.js";
import ProductData from './Product_data.json';
import ProductList from "./ProductList.js";
import Search from "./Search";

const Product = (props) => { //create constant Product

    const {WithHeader} = props
      const loadedProducts = ProductData.filter(product=> product.Class === '1'); 
      
    return (
      //basic layout. For project 5 will have actual products displayed
    <div>
      {WithHeader && <Navigation />}
      <ProductList items = {ProductData}/>
    </div>
    );
  };
export default Product;