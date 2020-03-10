import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'

const BottomNav = () => (
    <Navbar color="light" className="bottom-nav">
        <Nav>
            <NavItem>
                <Link to="/meals">Meals</Link>
            </NavItem>
            <NavItem>
                <Link to="/groceries">Groceries</Link>
            </NavItem>
        </Nav>
    </Navbar>
)

export default BottomNav;