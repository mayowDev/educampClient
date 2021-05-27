import axios from "axios";
import {  toast } from 'react-toastify'
import {BACKEND_URL} from "../configs"

const instance = axios.create({
    baseURL: BACKEND_URL,
    responseType: 'json',
    headers: {'Accept': 'application/json'}
});

instance.interceptors.request.use(
    config => {
        // const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
        // if (token) {
        //     const parsedToken = JSON.parse(token);
        //     config.headers['Authorization'] = 'Bearer ' + parsedToken;
        // }//for jwt
        config.withCredentials = true //for express-session cookies
        return config;
    },
    error => {
        console.log('AuthorizationError = ', error);
        Promise.reject(error);
    }
);

instance.interceptors.response.use(response =>{return response}, error => {
        // console.log('axios error', error.message);
        const expectdError = error.response && error.response.status >= 400 && error.response.status < 500
        if(!expectdError){
            toast.error(error.message)
        }else{
            const errorArray = error.response.data.message.split(",")
            errorArray.map(err=> err.length > 1 && toast.error(err));
        }
        return Promise.reject(error)
    }
);

export default instance;
