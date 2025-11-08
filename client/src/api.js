import axios from 'axios';
const api = axios.create({
    baseURL: process.env.CLIENT_URL,
    withCredentials: true //includo cookie nelle richeste (utile per inviare il refresh-token tramite i cookie)
})

export default api;