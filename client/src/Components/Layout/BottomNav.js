import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'

const BottomNav = () => (
    <Navbar color="light" className="bottom-nav">
        <Nav>
            <NavItem>
                <NavLink href="">Meals</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="">Groceries</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
)

export default BottomNav;