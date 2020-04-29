import axios from 'axios';

const newAxios = axios.create({
    baseURL: process.env.REACT_APP_URL_SERVER,
    headers: {
        'token-bro': localStorage.getItem('token')
    }
})

export default newAxios;