import axios from "./axios";
import {ITypeLoginData, ITypeSignUpData} from './types'
import {LOCAL_STORAGE_KEYS} from "../components/Constants"
import {BACKEND_URL} from "../configs"

export const signup = async (data:ITypeSignUpData) => {
    try {
        const result = await axios.post(`/auth/signup`, data)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(err.message));
            });
        if (result) {            
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const resendVerificationEmail = async (email:string) => {
    try {
        const result = await axios.post(`/auth/resend`, email)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(err.message));
            });
        if (result) {            
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const verify = async (token) => {
    try {
        const result = await axios.get(`/auth/verify/${token}`)
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
    const result = await axios.post("/auth/signin", data)
        .catch((err: any) => {
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.message)));
        });
    if (result && result.data) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.LOGIN_STATE, result.data.success)
        return result && result.data
    }
};

export const loginWithGoogle = () => {
    try {
        window.open(`${BACKEND_URL}/auth/google`, '_self')        
    } catch (error) {
        console.log('google auth error: ' + error);
    }
};

export const loginWithFacebook = async () => {
    const result = await axios.get("/auth/facebook")
        .catch((err: any) => {
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.message)));
        });
    if (result && result.data) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.LOGIN_STATE, result.data.success)
        return result && result.data
    }
};

export const forgotPassword = async (email:string)=> {
    try {
        const result = await axios.post("/auth/forgot", email)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(err));
            });
        return result && result.data;
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const resetPassword = async (resettoken, data ) => {
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
        console.log('API update pss', data);
        
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

export const updateProfileImage = async (file) => {
    try {
        const result = await axios.patch("/auth/me",file)
            .catch((err: any) => {
                console.log('err = ', err);
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
        return Promise.reject(new Error(e));
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

export const logout = async () => {
    try {
        const result = await axios.get(`/auth/`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result && result.data) {
            localStorage.clear();
            return result && result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const deleteAccount = async (email:string) => {        
    try {
        const result = await axios(`/auth/me`, { method: 'DELETE', data: {email}})
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