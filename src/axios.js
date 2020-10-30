import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedv.org/3',

});

export default instance;