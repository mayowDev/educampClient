
import axios from "./axios";
import {ICreateBootcamp} from './types'
export const getAllBootcamps = async () => {
    try {
        const result = await axios.get(`/bootcamps/`)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('getAllBootcamps = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const getBootcamp = async (id:string) => {
    try {
        const result = await axios.get(`/bootcamps/${id}`)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('getBootcamp = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const getBootcampByDistance = async (zipcode:number, distance:number) => {
    try {
        const result = await axios.get(`/bootcamps/${zipcode}/${distance}`)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('getBootcampByDistance = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const createBootcamp = async (data:ICreateBootcamp) => {
    try {
        const result = await axios.post(`/bootcamps/`, data)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('createBootcamp = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const updateBootcamp = async (bootcampId:string, data) => {
    try {
        const result = await axios.put(`/bootcamps/${bootcampId}`, data)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('updateBootcamp = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const uploadBootcampPhoto = async (id:string, data) => {
    try {
        const result = await axios.post(`/bootcamps/${id}`, data)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('uploadBootcampPhoto = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const favouriteBootcamp = async (id: string) => {
    try {
        const result = await axios
            .put(`bootcamps/${id}/favourite`)
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

export const deleteBootcamp = async (id:string) => {
    try {
        const result = await axios.delete(`/bootcamps/${id}`)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('deleteBootcamp = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};