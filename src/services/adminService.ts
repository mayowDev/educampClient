import axios from "./axios";

export const getAllUsers = async () =>{
    try {
        const result = await axios.get(`/users/`)
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

export const getUser = async (id) => {
    try {
        const result = await axios.get(`/users/${id}`)
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

export const createUser = async (data) => {
    try {
        const result = await axios.post(`/users/`, data)
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

export const updateUserDetails = async (id, data) => {
    try {
        const result = await axios.put(`/users/${id}`, data)
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
        const result = await axios.post(`/auth/me`, data)
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



export const fetchFavourites = async () => {
    try {
        const result = await axios
            .get(`user/favourites`)
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
            return {...result.data};
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const deleteAccount = async (email) => {
    try {
        const result = await axios.delete(`/users/`, email)
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