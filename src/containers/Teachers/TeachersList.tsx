import React from 'react'
import Teacher from './Teacher'
const TeachersList = () => {
    return (
        <div className="teachers">
        <h1>Educamp Teachers</h1>
        <div className="teacherList">
            <Teacher/>
            <Teacher/>
            <Teacher/>

        </div>
        </div>
    )
}

export default TeachersList
