import axios from "axios";

API_KEY = "a2e5f58044c38f804a49ba727f68bccf"


const BASE_URL = "https://api.themoviedb.org"

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
})

export const getData = url => {
    try {
        return instance.get(`/${url}`)
    }
    catch (error) {
        console.log(error);
    }
}

export default API_KEY