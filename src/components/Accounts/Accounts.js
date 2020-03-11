import React from 'react';
import { List, ListItem } from './Accounts.styled';
import { Title, Container } from '../index';

export const Accounts = ({ data, onClick, hildren, ...rest }) => {
    const getInstitution = (name) => {
        const splitName = name.split('_')[0]
        return splitName.charAt(0).toUpperCase() + splitName.substring(1);
    }

    return (    
        <div style={{width: '35%'}}>
            <p>Accounts</p>
            <List {...rest}>
                {data && data.map(item=>(
                    <ListItem onClick={() => onClick(item.id)}>
                        <Container spaced>
                            <div>
                                <Title type='h4'>{item.name}</Title>
                                <span>{getInstitution(item.institution.name)}</span>
                            </div>
                            <Container aligned='flex-end'>
                                <Title type='h2' nomargin>{item.balance.current} </Title>
                                <small>{item.currency}</small>
                            </Container>
                        </Container>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}