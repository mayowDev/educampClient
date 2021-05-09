import axios from "axios";
import {BACKEND_URL} from "../configs"
import {LOCAL_STORAGE_KEYS} from "../components/Constants"

const instance = axios.create({
    baseURL: BACKEND_URL,
    responseType: 'json'
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
        if (token) {
            const parsedToken = JSON.parse(token);
            config.headers['Authorization'] = 'Bearer ' + parsedToken;
        }
        return config;
    },
    error => {
        console.log('AuthorizationError = ', error);
        Promise.reject(error);
    }
);

// instance.interceptors.response.use(
//     response => {
//         return response;
//     },
//     async error => {
//         if ((error.response.status === 400 || error.response.status === 401)) {
//             return async () => {
//                 const retError = {...error};
//                 const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
//                 if (token) {
//                     const parsedToken = JSON.parse(token);
//                     const auth = parsedToken.auth;
//                     const headers = {Authorization: `Bearer ${auth}`};
//                     retError.config.headers = headers;
//                     return axios.request(retError.config);
//                 } else {
//                     // debugger;
//                     // if(window.location.pathname !== "/" && !window.location.pathname.includes("login")) {
//                        // window.location.href = "/discover";
//                     // }
//                 }
//             // }.catch(e => {
//             //     const retError = {...error};
//             //     console.log('instance error: ' + e);
                
//             //     // debugger;
//             //     // if(window.location.pathname !== "/" && !window.location.pathname.includes("login")) {
//             //     //     window.location.href = "/discover";
//             //     // }
//             //     // if(retError.config.method === "get") {
//             //     //     console.log('REFRESH = ', retError.config)
//             //     //     retError.config.headers = {};
//             //     //     return axios.request(retError.config);
//             //     // }
//             };
//         }
//         return Promise.reject(error.response.data);
//     }
// );


// async function refreshToken() {
//     refreshed = true;
//     const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
//     if (token) {
//         const parsedToken = JSON.parse(token);
//         const refresh = parsedToken.refresh;
//         const headers = {Authorization: `Bearer ${refresh}`};
//         // localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
//         return axios
//             .get(BACKEND_URL + 'refresh', {headers})
//             .catch((err: any) => {
//                 console.log('err = ', err);
//                 localStorage.clear();
//                 // window.location.href = "/login";
//                 if (err.response.status === 400) {
//                     return Promise.reject(
//                         new Error("Request failed with status code 400")
//                     );
//                 }
//                 return Promise.reject(new Error(JSON.stringify(err.response.data)));
//             })
//             // @ts-ignore
//             .then(async ({data: {token, aws}}, err) => {
//                 console.log('err, data = ', err, token)
//                 if (token.auth !== undefined && token.refresh !== undefined) {
//                     await localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, JSON.stringify(token));
//                 }
//                 return Promise.resolve(true);
//             });
//     }
// }

export default instance;
