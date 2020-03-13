import axios from 'axios';
const url = '/api/groceries'
const header = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const getGroceryList = () => {
    return axios.get(url, header);
}

export const getGroceryTypes = () => {
    return axios.get(`${url}/groceryTypes`, header)
}

export const addGrocery = item => {
    return axios.post(url, item);
}