import React from "react";
import Carousel from "../components/carousel.js"
import Footer from "../components/Footer.js"
import Product from "../components/Product.js";
import Navigation from "../shared/components/Navigation.js";


const Home = () => {  //create constant Home, add different Route
  return (
    <div>
      <Navigation />
      <Carousel />
      <Product />
      <Footer/>
    </div>
  );
};
export default Home;
