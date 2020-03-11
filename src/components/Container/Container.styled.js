import styled from 'styled-components';

export const ContainerTheme = styled.div`
    display: flex;

    ${props => props.centered ? `
        width: 90%;
        margin: auto;
    ` : ''}

    ${props => props.spaced ? `
        justify-content: space-between;
    ` : ''}

    ${props => props.aligned && `
        align-items: ${props.aligned};
    `}
`;
