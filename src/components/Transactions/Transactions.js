import React from 'react';
import moment from 'moment';

import { TransactionsList, Transaction } from './Transactions.styled';
import { Title } from '../index';

export const Transactions = ({ data, loading, children, ...rest }) => {
    return (
        <div style={{width: '62%'}}>
            <p>Transactions</p>
            <TransactionsList {...rest}>
                {loading && <p style={{textAlign: 'center', padding: '2em'}}>Loading...</p>}
                {!loading && !data && <p style={{textAlign: 'center', padding: '2em'}}>Select an account to see its corresponding transactions</p>}
                {!loading && data && data.map(item=>(
                    <Transaction>
                        <span>{moment(item.value_date).format('DD MMM YYYY')}</span>
                        <div style={{width: '60%'}}>
                            <Title type='h5'>{item.description}</Title>
                            <span>{item.status}</span>
                        </div>
                        <div style={{width: '18%'}}>
                            <Title type='h4'>{item.amount} <small>{item.currency}</small></Title>
                        </div>
                    </Transaction>
                ))}
            </TransactionsList>
        </div>
    )
}