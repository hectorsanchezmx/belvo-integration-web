import axios from 'axios';

const BASE_URL = 'http://ec2-54-211-132-29.compute-1.amazonaws.com';

export const fetchToken = () => {
    return axios.get(`${BASE_URL}/token`)
}

export const fetchAccounts = (link) => {
    return axios.post(`${BASE_URL}/accounts`, { link })
}

export const fetchTransactions = (link, accountId) => {
    return axios.post(`${BASE_URL}/transactions`, { link, accountId })
}

export const fetchBalances = (link) => {
    return axios.post(`${BASE_URL}/balances`, { link })
}

export const fetchOwners = (link) => {
    return axios.post(`${BASE_URL}/owners`, { link })
}