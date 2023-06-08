import axios from 'axios';

const API_KEY = 'a2e5f58044c38f804a49ba727f68bccf';

const BASE_URL = 'https://api.themoviedb.org';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const getData = url => {
  try {
    return instance.get(`/${url}`);
  } catch (error) {
    console.log(error);
  }
};

export default API_KEY;
