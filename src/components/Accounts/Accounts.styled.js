import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    background: #fff;
    border: 1px solid #ebebeb;
    min-height: 100px;
`;

export const ListItem = styled.li`
    border-bottom;: 1px solid #ebebeb;
    margin-bottom: -1px;
    padding: 1em;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        background: #ebebeb;
    }
`;