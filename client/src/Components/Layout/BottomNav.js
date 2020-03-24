import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHamburger } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { GlobalContext } from '../../Context/GlobalContext';

const BottomNavbar = styled(Navbar)`
    background-color: ${props => props.dark == 'true' ? '#444445' : '#f8f9fa'};
    width: 100%;
    position: sticky;
    bottom: 0;
`;

const BottomNavItems = styled(Nav)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const BottomNavLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${props => props.active == 'true' ? '1.1rem' : '1rem'};
    transition: all .2s;

    &:hover {
        font-size: 1.1rem;
    }
`;

const BottomNav = () => {
    const { settings, activePage } = useContext(GlobalContext);

    return (
        <BottomNavbar dark={settings.theme == 'dark' ? 'true' : 'false'}>
            <BottomNavItems>
                <NavItem>
                    <BottomNavLink to="/meals" active={activePage == 'Meals' ? 'true' : 'false'}>
                        <FontAwesomeIcon icon={faHamburger} />
                        <div>Meals</div>
                    </BottomNavLink>
                </NavItem>
                <NavItem>
                    <BottomNavLink to="/groceries" active={activePage == 'Groceries' ? 'true' : 'false'}>
                        <FontAwesomeIcon icon={faShoppingBag} />
                        <div>Groceries</div>
                    </BottomNavLink>
                </NavItem>
            </BottomNavItems>
        </BottomNavbar>
    )
}

export default BottomNav;