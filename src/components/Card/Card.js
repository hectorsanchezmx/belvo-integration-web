import React from 'react';
import { CardTheme } from './Card.styled';

export const Card = ({ children, ...rest }) => {
    return(
    <CardTheme {...rest}>
        {children}
    </CardTheme>
)
    }