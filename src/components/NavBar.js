import React from 'react';
import { NavLink } from 'react-router-dom'
import { Nav, Container, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="sm" variant="primary" bg="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar" />
                <NavLink className="navbar-brand" to="/">Espiritu en Movimiento</NavLink>
                <Navbar.Collapse id="responsive-navbar" className="flex-grow-0">
                    <Nav>
                        <NavLink className="nav-link" to="/category/rutinas">Rutinas</NavLink>
                        <NavLink className="nav-link" to="/category/clases">Clases Online</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <NavLink className="nav-link" to={`/cart`}>
                        <CartWidget />
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;