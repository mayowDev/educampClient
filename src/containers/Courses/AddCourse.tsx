import React, {useState, useEffect, Fragment} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../../components/Spinner';

const AddCourse = (props) => {
    const [skillValue,setSkillValue] = useState('beginner');
    const [courseData,setCourse] = useState({title: '', description: '', duration:"", price: 0, minimumSkill:[skillValue]});
    const history = useHistory()
    const {createCourse, iscourseCreated, isLoading, isApiError} = props

    const handleInputChange = (e)=>{
        setCourse({
          ...courseData,
          [e.target.name]: e.target.value
        });
    }
    
    const skillOptions = [
        {
          label: "Beginner",
          value:"beginner"        
        },
        {
          label: "Intermediate",
          value: "intermediate",
        },
        {
          label: "Advanced",
          value: "advanced",
        }
    ];
    const handleSkillSelectChange = (e)=> {
        setSkillValue(e.target.value);
    }
    const handleCourseSubmit = async (e)=>{
        e.preventDefault();
        console.log('course submit');
        await createCourse(courseData)
    }
    useEffect(() => {
        if(iscourseCreated) {
            toast.dark('Course Created Successfully')
            history.push('/courses')
        }
        // return () => {
        //     cleanup
        // }
    }, [iscourseCreated])

    return (
        <Fragment>
            {isLoading&&<Spinner/>}
            <div className="heading">
                <h2 className="title-head">Add Course </h2>
            </div>	
            <form onSubmit={handleCourseSubmit} method="post">
                <div className="form-group ">
                    <label htmlFor="title">Title</label>
                    <input name="title" onChange={handleInputChange} value={courseData.title} type="text" className="form-control" placeholder="Add a course title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input autoComplete="off" name="description" onChange={handleInputChange} value={courseData.description} type="text" className="form-control" placeholder="Add a course description" />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration</label>
                    <input autoComplete="off" name="duration" onChange={handleInputChange} value={courseData.duration} type="text" className="form-control" placeholder="Add a course duration in weeks" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input autoComplete="off" name="price" onChange={handleInputChange} value={courseData.price} type="number" className="form-control" placeholder="Add a course price" />
                </div>
                <div className="select-container">
                    <label>
                     Skill Level 
                    <select defaultValue='Beginner'  onChange={handleSkillSelectChange}>
                    {skillOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </Fragment>
    )
}

export default AddCourse
