import styled from 'styled-components';

export const ModalTheme = styled.div`
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    padding: 1em;
    width: 400px;
    min-height: 300px;
    max-height: 800px;
    overflow-y: scroll;
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    background: #000000b5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;