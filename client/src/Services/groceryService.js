import axios from 'axios';
const url = '/api/groceries'
const header = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const getGroceryList = () => {
    return axios.get(url);
}

export const getGroceryTypes = () => {
    return axios.get(`${url}/groceryTypes`)
}

export const addGrocery = item => {
    return axios.post(url, item);
}

export const deleteGrocery = id => {
    return axios.delete(`${url}/${id}`);
}