import React, { useState, createContext, useReducer } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalTheme = createGlobalStyle`
    body {
        color: ${props => (props.dark ? '#bbb' : '#888')};
        background-color: ${props => (props.dark ? '#333335' : '#fff')};
    }

    .list-group-item {
        background-color: ${props => (props.dark ? '#333335' : '#fff')};
        border-color: ${props => (props.dark ? 'rgba(255, 255, 255, 0.125)' : 'rgba(0, 0, 0, 0.125)')};
    }

    .form-control, .form-control:focus {
        color: ${props => (props.dark ? '#bbb' : '#5a5a5a')};
        background-color: ${props => (props.dark ? '#444445' : '#fff')};
        border-color: ${props => (props.dark ? 'rgba(255, 255, 255, 0.25)' : '#ced4da')};
    }

    .custom-control-label::before {
        background-color: ${props => (props.dark ? '#444445' : '#fff')};
        border-color: ${props => (props.dark ? 'rgba(255, 255, 255, 0.25)' : '#aaa')};
    }

    .input-group-text {
        color: ${props => (props.dark ? '#bbb' : '#5a5a5a')};
        background-color: ${props => (props.dark ? '#444445' : '#f7f7f9')};
        border-color: ${props => (props.dark ? 'rgba(255, 255, 255, 0.25)' : '#ced4da')};
    }

    .bottom-nav {
        background-color: ${props => props.dark ? '#444445' : '#f8f9fa'};
    }
`;



export const GlobalContext = createContext();

const settingsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_THEME':
            return {...state, theme: action.theme}
        default:
            return state;
    }
}

export const GlobalProvider = ({ children }) => {
    const [activePage, setActivePage] = useState(null);
    const [settings, dispatchSettings] = useReducer(settingsReducer, {
        theme: 'dark'
    });
    //const [theme, setTheme] = useState(null);

    return (
        <GlobalContext.Provider value={{
            activePage,
            setActivePage,
            settings, 
            dispatchSettings
        }}>
        <GlobalTheme dark={settings.theme == 'dark'} />
            {children}
        </GlobalContext.Provider>
    )
}