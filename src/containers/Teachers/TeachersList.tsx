import React,{useEffect} from 'react'
import Teacher from './Teacher';
import Spinner from '../../components/Spinner'
const TeachersList = (props) => {
    const {getTeachers, teachers, loading} = props
    useEffect(() => {
        // if(teachers&&teachers.length)//Todo memoize refercthing teachers if there length didnt change
        getTeachers()
    },[])
    return (
        <div className="teachers">
            {loading === true? <Spinner type="cover" />:
                <>
                <h1>Educamp Teachers</h1>
                <div className="teacherList">
                    {teachers.map(teacher =>{
                        return(
                            <div key={teacher.id}>
                                <Teacher teacher={teacher}/>
                            </div>
                        )
                    })}
                </div>
                </>
            }
            
    </div>
    )
}

export default TeachersList
