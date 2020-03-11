import styled from 'styled-components';

export const TransactionsList = styled.ul`
    border: 1px solid #ebebeb;
    border-radius: 5px;
    min-width: 600px;
    min-height: 80vh;
    background: #fff;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Transaction = styled.li`
    display: flex;
    padding: 1em;
    justify-content: space-between;

    span {
        width: 15%;
    }
`;