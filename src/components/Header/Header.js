import React from 'react';
import { HeaderTheme } from './Header.styled';

export const Header = ({ children, ...rest }) => {
    return(
    <HeaderTheme {...rest}>
        {children}
    </HeaderTheme>
)
    }