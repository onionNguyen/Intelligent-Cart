import React from "react";

import Product from "/Users/nhatnguyen/intelligent-cart/src/components/Product.js";
import Navigation from "../shared/components/Navigation.js";


const Home = () => {
  return (
    <div>
      <Navigation/>
      <Product/>
      <h1>Bootstrap</h1>
      <button type="button" class="btn btn-success">
        Success
      </button>
    </div>
  );
};
export default Home;
