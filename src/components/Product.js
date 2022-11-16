import React from "react";
import Footer from "../components/Footer.js"
import Navigation from "../shared/components/Navigation.js";

const Product = (props) => { //create constant Product

    const {WithHeader} = props

    return (
      //basic layout. For project 5 will have actual products displayed
    <div>
      {WithHeader && <Navigation />}
      <React.Fragment>
        <div class="row container p-5 my-5 border bg-light mx-auto">
          <h1 class="col p-3">Product list</h1>
          <h1 class="col p-3">Product list</h1>
          <h1 class="col p-3">Product list</h1>
        </div>
        <div class="row container p-5 my-5 border bg-light mx-auto">
          <h1 class="col p-3">Product list</h1>
          <h1 class="col p-3">Product list</h1>
          <h1 class="col p-3">Product list</h1>
        </div>
        <div class="row container p-5 my-5 border bg-ligh mx-auto">
          <h1 class="col p-3">Product list</h1>
          <h1 class="col p-3">Product list</h1>
          <h1 class="col p-3">Product list</h1>
        </div>
      </React.Fragment>
      <Footer />
      </div>
    );
  };

export default Product;