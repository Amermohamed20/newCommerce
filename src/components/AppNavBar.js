import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from 'react-router-dom'
import {useDispatch , useSelector} from "react-redux";

function AppNavBar() {
    const cart = useSelector((state) => state.cart)
    console.log(cart)
  return (
    
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to='/' className ='navbar-brand'>Cart App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/product' className="nav-link">Produsct</Link>
              <Link to="/cart" className="nav-link">Cart-{cart.length}</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
}

export default AppNavBar;
