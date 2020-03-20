import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [activePage, setActivePage] = useState(null);
    return (
        <GlobalContext.Provider value={{
            activePage,
            setActivePage
        }}>
            {children}
        </GlobalContext.Provider>
    )
}