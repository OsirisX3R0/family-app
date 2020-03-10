import React from 'react';
import TopBar from './TopBar';
import BottomNav from './BottomNav';

const Layout = ({ children }) => (
    <>
        <TopBar />
        {children}
        <BottomNav />
    </>
)

export default Layout;