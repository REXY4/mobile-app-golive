import axios from 'axios';

export const Api = axios.create({
    baseURL : 'https://8154-103-28-116-54.ngrok.io/api/v1',
});
