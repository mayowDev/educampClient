import axios from "./axios";
import {ITypeLoginData, ITypeSignUpData, IForgotPassword} from './types'
import {LOCAL_STORAGE_KEYS} from "../components/Constants"

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

export const loginWithGoogle = async () => {
    const result = await axios.get("/auth/google")
        .catch((err: any) => {
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.message)));
        });
    console.log('loginWithGoogle api', result);
    
    if (result && result.data) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.LOGIN_STATE, result.data.success)
        return result && result.data
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

export const forgotPassword = async (email:IForgotPassword)=> {
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
    console.log('profileImg file', file);
    try {
        const result = await axios.patch(`/auth/me`, file)
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
            // console.log('GET_PROFILE_DATA_API', result.data.data);
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

export const deleteAccount = async (email) => {
    try {
        const result = await axios.delete(`/auth/me`, email)
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