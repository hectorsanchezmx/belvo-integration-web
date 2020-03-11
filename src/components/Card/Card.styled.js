import styled from 'styled-components';

export const CardTheme = styled.div`
    padding: 3em;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    box-shadow: 0 0px 25px #a9a9a92e;
    display: flex;
    flex-direction: column;
    
    ${props => props.centered && 
    `
        width: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
    `
    }
`;
