import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => (
    <Navbar color="primary" dark>
        <NavbarBrand tag={Link} to="/">
            #harrishouse
        </NavbarBrand>
        <NavbarText>
            <Link to="/settings">
                <FontAwesomeIcon icon={faCog} />
            </Link>
        </NavbarText>
    </Navbar>
)

export default TopBar;