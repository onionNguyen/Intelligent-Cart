import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import WishList from "./pages/WishList";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";


const App = () => {
  return (
    <Routes>
      <Route
        path="/Auth"
        element={
          <PublicRoute>
            <Auth WithHeader={true} />
          </PublicRoute>
        }
      ></Route>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product WithHeader={true} />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route
        path="/WishList"
        element={
          <PrivateRoute>
            {" "}
            <WishList />{" "}
          </PrivateRoute>
        }
      />
      <Route path="*" element={<a>Page Not Found</a>} />
    </Routes>
  );
};

export default App;
