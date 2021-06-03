
import axios from "./axios";

export const getAllReviews = async () => {
    try {
        const result = await axios.get(`/reviews/`)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('getAllReviews = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const getReview = async (id) => {
    try {
        const result = await axios.get(`/reviews/${id}`)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('getReview = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};


export const createReview = async (data) => {
    try {
        const result = await axios.post(`/reviews/`, data)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('createReview = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const updateReview = async (id, data) => {
    try {
        const result = await axios.put(`/reviews/${id}`, data)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('updateReview = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const deleteReview = async (id) => {
    try {
        const result = await axios.delete(`/reviews/${id}`)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('deleteReview = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};