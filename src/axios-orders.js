import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-practice-a8da4.firebaseio.com/'
});

export default instance;

