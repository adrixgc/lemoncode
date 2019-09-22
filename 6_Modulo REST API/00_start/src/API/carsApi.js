const axios = require('axios');

const baseUrl = 'http://localhost:3050/api';

export const getAllCars = () => {
    return axios.get(baseUrl + '/cars')
}

export const getCarById = (id) => {
    return axios.get(baseUrl + `/cars/${id}`)
}

export const addCar = (car) => {
    return axios.post(baseUrl + '/cars', car)
}