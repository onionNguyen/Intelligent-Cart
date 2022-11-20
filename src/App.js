import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import Product from './components/Product';
import Home from "./pages/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product WithHeader ={true} />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/WishList" element={<h1>tobe implemented</h1>} />
      {/* <Route path="*" element={<a>Page Not Found</a>} /> */}
    </Routes>
        

  );


};

export default App;