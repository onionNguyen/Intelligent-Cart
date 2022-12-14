import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => ( //create constant Footer

//Footer layout
  <div> 
    <Container className="bg-light">
      <footer className="page-footer font-small pt-5">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <img className="me-2" alt="logo" src="logo.png" width="50px" />
              <h5 className="text-uppercase p-4">Intelligent Cart</h5>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md mb-3">
              <span>
                <img className="p-3" src="./Facebook Icon.png" alt="Facebook Icon" />
                <img className="p-3" src="./GitHub Icon.png" alt="GitHub Icon" />
                <img className="p-3" src="./Instagram Icon.png" alt="Instagram Icon" />
                <img className="p-3" src="./Twitter Icon.png" alt="Twitter Icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <span>Intelligent Cart</span>
        </div>
      </footer>
    </Container>
  </div>
);

export default Footer;
