import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://portfolio1-ya3r.onrender.com', // or your backend URL
  timeout: 5000,
});

export default instance;
