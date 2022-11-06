import React from "react";
import Carousel from "../components/carousel.js"

import Product from "../components/Product.js";
import Navigation from "../shared/components/Navigation.js";


const Home = () => {
  return (
    <div>
      <Navigation/>
      <Product/>
      <h1>Bootstrap</h1>
      <Carousel/>
    </div>
  );
};
export default Home;
