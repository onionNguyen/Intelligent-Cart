import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  

function Navigation() {  //add navigation bar on header using Bootstrap 
  return (
    <div class="bg-secondary">
      <Navbar bg="" expand="md">
        <Container>
          <img class="me-2" alt="logo" src="logo.png" width="50px" />
          <Navbar.Brand href="/">Intelligent Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Auth">Login/Register</Nav.Link>
              <Nav.Link href="/Product">Product</Nav.Link>
              <Nav.Link href="/Navbar">Search</Nav.Link>
              <Nav.Link href="/WishList">Wishlist</Nav.Link>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Dropdown Item 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Dropdown Item 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Dropdown Item 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Another Item
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );  
}  
export default Navigation;  