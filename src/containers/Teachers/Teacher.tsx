import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import TeacherImage from '../../assets/images/teachers/teacher.jpg'
const Teacher = ({teacher}) => {
    const history = useHistory()
    
    const handleTeacherSelection = () => {
        history.push(`/teachers/${teacher.id}`)
    }
    return (
        <div className="teacher-container" onClick={handleTeacherSelection}>
            <div className="teacher">
                <h3>{teacher.name}</h3>
                <h5>Instructor</h5>
                <img src={teacher.avatar&&teacher.avatar || TeacherImage} alt="teacher-img" />
            </div>
        </div>
    )
}

export default Teacher
