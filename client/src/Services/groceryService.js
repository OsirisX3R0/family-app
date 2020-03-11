import axios from 'axios';
const url = '/api/groceries'

export const getGroceryList = () => {
    return axios.get(url);
}

export const getGroceryTypes = () => {
    return axios.get(`${url}/groceryTypes`)
}

export const addGrocery = item => {
    return axios.post(url, item);
}