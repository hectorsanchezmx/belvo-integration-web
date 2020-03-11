import React, { Component } from 'react';
import moment from 'moment';

import { fetchToken, fetchAccounts, fetchTransactions, fetchBalances, fetchOwners } from '../services/belvo';
import { Header, Button, Card, Title, Container, Accounts, Transactions, Modal } from '../components';

const belvoSDK = window.belvoSDK;

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            link: null,
            accounts: null,
            transactions: null,
            loadingTransactions: false,
            modalOpened: false,
            owners: null,
            balances: null,
            accountId: null
        };
    }
    
    async componentDidMount() {
        const link = localStorage.getItem('link');
        this.retrieveData(link)

        this.setState({ link })
    }

    handleCallback = (link) => {
        localStorage.setItem('link', link)
        this.retrieveData(link)

        setTimeout(() => {
            this.setState({ link })
        }, 1000)
    }

    handleClick = async() => {
        const res = await fetchToken();
        const token = res.data.access;
        belvoSDK.createWidget(token, {
            locale: 'en',
            callback: (link) => this.handleCallback(link)
          }).build();
    }

    handleLogout = () => {
        localStorage.removeItem('link')
        this.setState({ 
            link: null,
            accounts: null,
            transactions: null,
            loadingTransactions: false
        })
    }

    retrieveData = async (link) => {
        const res = await fetchAccounts(link)
        const accounts = res.data;
        this.setState({ accounts })
    }

    handleAccountSelect = async (accountId) => {
        const { link } = this.state;
        this.setState({ loadingTransactions: true, accountId })
        const res = await fetchTransactions(link, accountId)
        const transactions = res.data;
        setTimeout(() => {
            this.setState({ transactions, loadingTransactions: false })
        }, 500)
    }

    handleViewOwners = async() => {
        const { link } = this.state;
        this.setState({ modalOpened: true });

        const res = await fetchOwners(link)
        const owners = res.data;
        this.setState({  owners })
    }

    handleViewBalances = async() => {
        const { link, accountId } = this.state;
        this.setState({ modalOpened: true });

        const res = await fetchBalances(link, accountId)
        const balances = res.data;
        this.setState({  balances })
    }

    handleCloseModal = (isOpened) => {
        this.setState({ modalOpened: isOpened })
    }

    render() {
        const { link, accounts, transactions, loadingTransactions, modalOpened, owners, balances, accountId } = this.state;

        return(
            !link ? (
                <>
                    <Card centered>
                        <Title type="h2" centered>Add an account to begin</Title>
                        <Button onClick={this.handleClick}>Add bank account</Button>
                    </Card>
                </>
            ) 
            : (
                <>
                    <Header>
                        <Title>Dashboard</Title>
                        <span style={{cursor:'pointer'}} onClick={this.handleViewOwners}>View owners</span>
                        <Button onClick={this.handleLogout}>Logout</Button>
                    </Header>

                    <Container spaced centered>
                        <Accounts 
                            data={accounts} 
                            onClick={this.handleAccountSelect}
                        />
                        <Transactions 
                            loading={loadingTransactions}
                            data={transactions} 
                        />
                        {accountId && 
                            <span style={{cursor:'pointer', top: '124px', position: 'absolute', right: '5%'}} onClick={this.handleViewBalances}>View balances</span>
                        }
                    </Container>
                    <Modal open={modalOpened} setOpen={this.handleCloseModal}>
                        {!owners && !balances && <span style={{padding: '1em' }}>Loading...</span>}
                        {owners && 
                            <>
                                <Title type='h3'>Owners</Title>
                                {owners.map(owner=>(
                                    <span>{owner.display_name}</span>
                                ))}
                            </>
                        }
                        {balances && 
                             <>
                                <Title type='h3'>Balances</Title>
                                {balances.map(balance=>(
                                    <p>{balance.current_balance} at {moment(balance.value_date).format('DD MM YYY')}</p>
                                ))}
                            </>
                        }
                    </Modal>
                </>
            )    
        )
    }
}