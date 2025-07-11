import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // 🔁 Set your base URL here
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
