import React from 'react';
import { ContainerTheme } from './Container.styled';

export const Container = ({ children, ...rest }) => {
    return(
    <ContainerTheme {...rest}>
        {children}
    </ContainerTheme>
)
    }