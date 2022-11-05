import React from "react";
import { Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Fragment } from "react";
import { useState } from "react";


const App = () => {
  return (
    <Fragment >
        <Home />
    </Fragment>
  );


};

export default App;
