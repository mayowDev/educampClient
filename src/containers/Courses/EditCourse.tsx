import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import Spinner from '../../components/Spinner';

const EditCourse = (props) => {
    const {fetchCourse, courseDetails, updateCourse, currentUser, isLoading, isCourseUpdated} = props
    const [title, setTitle] =  useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration]= useState('');
    const [owner, setOwner] = useState('');
    const history = useHistory()
    const courseId = props.match.params.id

    useEffect(() => {
        fetchCourse(courseId)
    },[])

    useEffect(() => {
        if(courseDetails && courseDetails.id){
            // const { slug,scholarshipAvailable,published, minimumSkill, courseContent, averageRating} = courseDetails;
            setDuration(courseDetails.duration)
            setTitle(courseDetails.title);
            setThumbnail(courseDetails.thumbnail);
            setDescription(courseDetails.description); 
            setPrice(courseDetails.price);
            setOwner(courseDetails.UserId)    
        }
    }, [courseDetails.id]); 

    useEffect(() => {
        if(currentUser && currentUser.id !== owner){
            console.log('owner', currentUser.id, owner);
            history.replace(("/"))
        }
    },[currentUser && currentUser.id])

    const handleUpdateCourseDetails = async (e) =>{
        e.preventDefault();
        const courseData = {title, description, duration, price, thumbnail }
        await updateCourse(courseId, courseData)
    }
    useEffect(() => {
        if(isCourseUpdated) {
            toast.dark('Course Updated Successfully')
            history.push('/courses')
        }
    }, [isCourseUpdated])

    const handleResetCourseDetails = ()=>{
        setDuration(courseDetails.duration)
        setTitle(courseDetails.title);
        setThumbnail(courseDetails.thumbnail);
        setDescription(courseDetails.description); 
        setPrice(courseDetails.price);
        setOwner(courseDetails.UserId)   

    }
    const handleDisableButton =()=>{        
        return title !== courseDetails.title || description !== courseDetails.description
    }
    
    return (
        <>
            {isLoading?<Spinner/>:
            <div className="edit-course">
                <div className="background-hero">
                    <h1>Edit Course</h1>
                </div>
                <form className="details-form">
                        <h4> Edit Course Details</h4>
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <div className="input-container">
                            {/* <input autoComplete="off" name="title" onChange={handleInputChange} value={courseData.title} type="text" className="form-control" /> */}
                            <input autoComplete="off" name="title" value={title} onChange={(e) => setTitle(e.target.value) } className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">description</label>
                            <div className="input-container">
                            <input autoComplete="off" name="description" onChange={e=>setDescription(e.target.value)} value={description} type="text" className="form-control"  />
                            </div>
                        </div>
                        {handleDisableButton()&&
                        <div className="cta-btn-section">
                            
                            <button onClick={handleUpdateCourseDetails} type="submit" className="btn">Save changes</button>
                            <button onClick={handleResetCourseDetails} type="reset" className="btn">Cancel changes</button>
                        </div>
                        }
                </form>
			</div>
            }
        </>
    )
}

export default EditCourse
