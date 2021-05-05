import axios from "axios";
import {BACKEND_URL} from "../configs"

const instance = axios.create({
    baseURL: BACKEND_URL,
    responseType: 'json'
});

export default instance;
