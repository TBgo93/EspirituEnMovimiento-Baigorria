import React from 'react';
import { Nav, Container, Navbar, NavbarBrand } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
    return (
    <Navbar collapseOnSelect expand="sm" variant="primary">
        <Container>
            <Nav>
                <Nav.Link href="#">
                    <CartWidget />
                </Nav.Link>
            </Nav>
            <NavbarBrand href="#">Espiritu en Movimiento</NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar" />
            <Navbar.Collapse id="responsive-navbar" className="flex-grow-0">
                <Nav>
                    <Nav.Link href="#">Rutinas</Nav.Link>
                    <Nav.Link href="#">Clases Online</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;