import axios from "./axios-foursquare";
// https://api-geekcamp.herokuapp.com/api/v1

//getAllUsers
//getAllCouses
//getSingleCouse by id -> and route course description
//getAllBootcamps
// getSingleBootcamp

//search course by category and by keyword match

//login
//getCurrentUser
//signup
//logout
//signinwith google
// user should be able to review a course after 50% completion, and remind him after 10% of the 50% remaining

//if user->buys-a-Courses -> authenticat him to that course, else just show him 3-5 random videos of the course 


const baseUrl = process.env.API_URL

export const fetchCourses = async (queryData) => {
    try {
        const result = await axios.get(`/courses/${queryData}`).catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('fetchCourses = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};


export const fetchBootcamps = async (queryData) => {
    try {
        const result = await axios.get(`/bootcamps/${queryData}`).catch((err: any) => {
            console.log('err = ', err);
            if (err && err.response && err.response.status === 400) {
                return Promise.reject(
                    new Error("Request failed with status code 400")
                );
            }
            return Promise.reject(new Error(JSON.stringify(err.response.data)));
        });
        console.log('fetchBootcamps = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
