import React from 'react';
import { Nav, Container, Navbar, NavbarBrand } from 'react-bootstrap';
import CardWidget from './CardWidget';

function NavBar() {
    return (
    <Navbar expand="lg" variant="primary">
        <Container>
            <Nav>
                <Nav.Link href="#">Rutinas</Nav.Link>
                <Nav.Link href="#">Clases Online</Nav.Link>
            </Nav>
            <NavbarBrand href="#">Espiritu en Movimiento</NavbarBrand>
            <Nav>
                <Nav.Link href="#">Buscar</Nav.Link>
                <Nav.Link href="#">Iniciar Sesion</Nav.Link>
                <Nav.Link href="#">
                    <CardWidget />
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    );
}

export default NavBar;