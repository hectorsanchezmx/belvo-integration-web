import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 50px;
    margin: 0;
`;

export const H2 = styled.h2`
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 2em;
    text-align: ${props => props.centered ? 'center' : 'left'};
    ${props => props.nomargin && 'margin: 0;'}
`;

export const H3 = styled.h3`
    font-size: 30px;
    margin: 0;
`;

export const H4 = styled.h4`
    font-size: 25px;
    margin: 0;
    line-height: 1;
`;

export const H5 = styled.h5`
    font-size: 20px;
    margin: 0;
`;