import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Adjust if backend runs on a different port
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor to handle errors globally or log them
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    if (error.code === "ERR_NETWORK") {
      console.error("Network Error: Is the backend running at http://localhost:8000?");
    }
    return Promise.reject(error);
  }
);

export default api;
