import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';


function Navigation() {  //add navigation bar on header using Bootstrap 
  return (
    <div className="bg-secondary">
      <Navbar bg="" expand="md">
        <Container>
          <img className="me-2" alt="logo" src="logo.png" width="50px" />
          <Navbar.Brand href="/">Intelligent Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Auth">Login/Register</Nav.Link>
              <Nav.Link href="/Product">Product</Nav.Link>
              <Nav.Link href="/Navbar">Search</Nav.Link>
              <Nav.Link href="/WishList">Wishlist</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search..."/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
      </Navbar>
    </div>
  );  
}  
export default Navigation;  