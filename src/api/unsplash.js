import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 177b21be1c6a9b01f891a40839c277ebb078e69f54e983039da392a8757969d1'
    }
});