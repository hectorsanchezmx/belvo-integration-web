import React from 'react';
import { ButtonTheme } from './Button.styled';

export const Button = ({ children, ...rest }) => (
    <ButtonTheme {...rest}>
        {children}
    </ButtonTheme>
)