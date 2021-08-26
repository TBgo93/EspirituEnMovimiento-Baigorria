import React from 'react';
import { NavLink } from 'react-router-dom'
import { } from 'semantic-ui-react'
import CartWidget from './CartWidget';
import WishListWidget from './WishListWidget'


function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink className="navbar-brand" to="/">Espiritu en Movimiento</NavLink>
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/categories/Rutinas">
                        Rutinas
                    </NavLink>
                    <NavLink className="nav-link" to="/categories/ClasesOnline">
                        Clases Online
                    </NavLink>
                    <NavLink className="nav-link" to="/categories/Combos">
                        Combos
                    </NavLink>
                </div>
                <div className="navbar-nav">
                    <WishListWidget />
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;