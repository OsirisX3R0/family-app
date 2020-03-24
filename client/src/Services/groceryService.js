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
    return axios.get(`${url}/groceryTypes`);
}

export const addGrocery = item => {
    return axios.post(url, item);
}

export const updateGroceryItem = item => {
    return axios.put(`${url}/${item._id}`, item);
}

export const saveChecked = (id, checked) => {
    return axios.put(`${url}/check/${id}`, { checked });
}

export const deleteGrocery = id => {
    return axios.delete(`${url}/${id}`);
}

export const clearGroceryList = () => {
    return axios.delete(url)
}