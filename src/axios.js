import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4422'
});

export default instance;