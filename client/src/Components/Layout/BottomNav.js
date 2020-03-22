import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../../Context/GlobalContext';

const BottomNav = () => {
    const { settings, activePage } = useContext(GlobalContext);

    return (
        <Navbar className="bottom-nav">
            <Nav>
                <NavItem>
                    <Link to="/meals" className={activePage == 'Meals' ? 'active' : ''}>
                        <FontAwesomeIcon icon={faHamburger} />
                        <div>Meals</div>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/groceries" className={activePage == 'Groceries' ? 'active' : ''}>
                        <FontAwesomeIcon icon={faShoppingBag} />
                        <div>Groceries</div>
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default BottomNav;