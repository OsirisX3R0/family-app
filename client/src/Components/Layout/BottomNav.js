import React, { useContext } from 'react';
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../../Context/GlobalContext';
import useStyledComponents from '../../Hooks/useStyledComponents';

const BottomNav = () => {
    const { settings, activePage } = useContext(GlobalContext);
    const { BottomNavbar, BottomNavItems, BottomNavLink } = useStyledComponents();
    return (
        <BottomNavbar dark={settings.theme == 'dark' ? true : false}>
            <BottomNavItems>
                <NavItem>
                    <BottomNavLink to="/meals" active={activePage == 'Meals' ? "true" : "false"}>
                        <FontAwesomeIcon icon={faHamburger} />
                        <div>Meals</div>
                    </BottomNavLink>
                </NavItem>
                <NavItem>
                    <BottomNavLink to="/groceries" active={activePage == 'Groceries' ? "true" : "false"}>
                        <FontAwesomeIcon icon={faShoppingBag} />
                        <div>Groceries</div>
                    </BottomNavLink>
                </NavItem>
            </BottomNavItems>
        </BottomNavbar>
    )
}

export default BottomNav;