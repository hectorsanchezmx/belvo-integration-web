import React from 'react';
import { H1, H2, H3, H4, H5 } from './Title.styled';

export const Title = ({ children, type, ...rest }) => {
    switch(type) {
        case 'h1':
            return <H1 {...rest}>{children}</H1>
        case 'h2':
            return <H2 {...rest}>{children}</H2>
        case 'h3':
            return <H3 {...rest}>{children}</H3>
        case 'h4':
            return <H4 {...rest}>{children}</H4>
        case 'h5':
            return <H5 {...rest}>{children}</H5>
        default:
            return <H1 {...rest}>{children}</H1>
    }
}