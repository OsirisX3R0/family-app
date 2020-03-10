import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap'

const TopBar = () => (
    <Navbar color="primary" dark>
        <NavbarBrand tag={Link} to="/">
            #harrishouse
        </NavbarBrand>
    </Navbar>
)

export default TopBar;