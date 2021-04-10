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

module.exports ={
    getAllCouses: async ()=>{
        await axios.get(`${baseUrl}/api/courses`)
    }
}