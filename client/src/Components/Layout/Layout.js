import React from 'react';
import { Container } from 'reactstrap';
import TopBar from './TopBar';
import BottomNav from './BottomNav';

const Layout = ({ children }) => (
    <>
        <TopBar />
        <Container fluid className="my-3">
            {children}
        </Container>        
        <BottomNav />
    </>
)

export default Layout;