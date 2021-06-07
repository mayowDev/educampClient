import React from 'react'
import {useHistory} from 'react-router-dom'
import TeacherImage from '../../assets/images/teachers/teacher.jpg'
const Teacher = () => {
    const history = useHistory()
    return (
        <div className="teacher-container" onClick={e=>history.push('/teachers/some-name')}>
            <div className="teacher">
                <h3>Teacher Name</h3>
                <h5>Work place</h5>
                <img src={TeacherImage} alt="teacher-img" />
            </div>
        </div>
    )
}

export default Teacher
