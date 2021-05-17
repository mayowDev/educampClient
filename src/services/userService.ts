import axios from "./axios";
import {LOCAL_STORAGE_KEYS} from "../components/Constants"
import {ITypeLoginData, ITypeSignUpData} from './types'

export const signup = async (data:ITypeSignUpData) => {
    try {
        const result = await axios.post(`/auth/register`, data)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err)));
            });
        if (result) {            
            return result.data;
        }
    } catch (e) {
        console.log('promiseERROR',e);
        return Promise.reject(new Error(e.message));
    }
}

export const verify = async (data) => {
    try {
        const result = await axios.put(`/auth/verify`, data)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const login = async (data:ITypeLoginData) => {
    const result = await axios.post("/auth/login", data)
        .catch((err: any) => {
            return Promise.reject(err.response);
        });
    if (result && result.data && result.data.token) {
        //handle session here
        localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, JSON.stringify(result.data.token))
        return result && result.data
    }
};

export const loginWithGoogle = async () => {
    const result = await axios.get("/auth/google")
        .catch((err: any) => {
            return Promise.reject(err.response);
        });
    if (result && result.data) {
        //handle session here
        return result && result.data
    }
};

export const loginWithFacebook = async () => {
    const result = await axios.get("/auth/facebook")
        .catch((err: any) => {
            return Promise.reject(err.response);
        });
    if (result && result.data) {
        //handle session here
        return result && result.data
    }
};

export const forgotPassword = async (data) => {
    try {
        const result = await axios.post("/auth/forgot", data)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err)));
            });
        return result && result.data;
    } catch (e) {
        console.log('e = ', e);

        return Promise.reject(new Error(e.message));
    }
};

export const resetPassword = async (data, resettoken) => {
    try {
        const result = await axios.put(`/auth/${resettoken}`, data)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        return result && result.data;
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const updatePassword = async (data) => {
    try {
        const result = await axios.put("/auth/", data)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        return result && result.data;
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const updateProfile = async (data) => {
    console.log('data in Apis', data);
    try {
        const result = await axios.put(`/auth/me`, data)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const updateProfileImage = async (data) => {
    console.log('data in Apis', data);
    try {
        const result = await axios.patch(`/auth/me`, data)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const getUserProfile = async () => {
    try {        
        const result = await axios.get(`/auth/me`)
            .catch((err: any) => {
                console.log('getUserProfileErr = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

// export const fetchFavourites = async () => {
//     try {
//         const result = await axios
//             .get(`user/favourites`)
//             .catch((err: any) => {
//                 console.log('err = ', err);
//                 if (err && err.response && err.response.status === 400) {
//                     return Promise.reject(
//                         new Error("Request failed with status code 400")
//                     );
//                 }
//                 return Promise.reject(new Error(JSON.stringify(err.response.data)));
//             });
//         if (result) {
//             return {...result.data};
//         }
//     } catch (e) {
//         return Promise.reject(new Error(e.message));
//     }
// };

// export const logout = async () => {
//     try {
//         const result = await axios.get(`/auth/`)
//             .catch((err: any) => {
//                 console.log('err = ', err);
//                 if (err && err.response && err.response.status === 400) {
//                     return Promise.reject(
//                         new Error("Request failed with status code 400")
//                     );
//                 }
//                 return Promise.reject(new Error(JSON.stringify(err.response.data)));
//             });
//         if (result) {
//             return result.data;
//         }
//     } catch (e) {
//         return Promise.reject(new Error(e.message));
//     }
// };

// export const deleteAccount = async (email) => {
//     try {
//         const result = await axios.delete(`/auth/me`, email)
//             .catch((err: any) => {
//                 console.log('err = ', err);
//                 if (err && err.response && err.response.status === 400) {
//                     return Promise.reject(
//                         new Error("Request failed with status code 400")
//                     );
//                 }
//                 return Promise.reject(new Error(JSON.stringify(err.response.data)));
//             });
//         if (result) {
//             return result.data;
//         }
//     } catch (e) {
//         return Promise.reject(new Error(e.message));
//     }
// };