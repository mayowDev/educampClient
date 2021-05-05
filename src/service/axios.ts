import axios from "axios";
import {BACKEND_URL} from "../configs"
console.log('BACKEND_URL', BACKEND_URL);

const instance = axios.create({
    baseURL: BACKEND_URL,
    responseType: 'json'
});

export default instance;
