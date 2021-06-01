
import axios from "./axios";

// Features Todo: 
//search course by category and by keyword match aka full text search
// user should be able to review a course after 50% completion, and remind him after 10% of the 50% remaining
//if user->buys-a-Courses -> authenticat him to that course, else just show him 3-5 random videos of the course 

export const getAllCourses = async () => {
    try {
        const result = await axios.get(`/courses`)
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

export const getPublishedCourses = async () => {
    try {
        const result = await axios.get('/courses/published')
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('fetchAllCourses = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const getCourse = async (id) => {
    try {
        const result = await axios.get(`/courses/${id}`)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('fetchCourse = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

// export const getCoursesByBootcamp = async (bootcampId) => {
//     try {
//         const result = await axios.get(`/bootcamps/${bootcampId}/courses/`)
//         .catch((err: any) => {
//             console.log('err = ', err);
//             if (err && err.response && err.response.status === 400) {
//                 return Promise.reject(
//                     new Error("Request failed with status code 400")
//                 );
//             }
//             return Promise.reject(new Error(JSON.stringify(err.response.data)));
//         });
//         console.log('createCourse = ', result)
//         if (result) {
//             return result.data;
//         }
//     } catch (e) {
//         return Promise.reject(new Error(e.message));
//     }
// };

export const createCourse = async (data) => {
    try {
        const result = await axios.post(`/courses/`, data)
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

export const updateCourse = async (id, data) => {
    try {
        const result = await axios.put(`/courses/${id}`, data)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('createCourse = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const uploadCourseContent = async (id, data) => {
    try {
        const result = await axios.post(`/courses/${id}`, data)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('createCourse = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const favouriteCourse = async (id: string)=>{
    try {
        const result = await axios.put(`/courses/${id}/favourite`)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('createCourse = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const deleteCourse = async (id) => {
    try {
        const result = await axios.delete(`/courses/${id}`)
        .catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('createCourse = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};