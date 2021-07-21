import React,{useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import TeacherImage from '../../assets/images/teachers/teacher.jpg'
import courseThumbnail from '../../assets/images/coursesThumbnails/modern-react-thumb.jpg'
import IconBtn from '../../components/IconBtn';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';

const TeacherDetails = (props) => {
    const [teacherCourses, setTeacherCourses] = useState([])
    const [isNull, setIsNull] = useState(false)

    const {teacherDetails, getTeacherByName, loading} = props;
    const history = useHistory()
    const teacherSlug = props.match.params.slug;
    useEffect(() => {
        if(teacherDetails &&  teacherDetails.slug !==teacherSlug){
            getTeacherByName(teacherSlug)
        }
        const delayDebounce = setTimeout(() => {
            setIsNull(teacherDetails&& teacherDetails.id === undefined)
        }, 500)
        return () => clearTimeout(delayDebounce)
    },[teacherDetails && teacherDetails.id])
    useEffect(() => {
        if(teacherDetails&&teacherDetails.courses && teacherDetails.courses.length>0){
            const myCourses = teacherDetails.courses.map(course=> course)
           return setTeacherCourses(myCourses)
        }
    },[teacherDetails && teacherDetails.id])
    const handleCourseClick = (slug:string) => {
        history.push(`/courses/${slug}`)
    }
    if(isNull&& loading === false) {
        // history.replace('/teachers')//dont use history here it throws warning Cannot update during an existing state transition 
        window.location.href = "/404"
    }
    return (
        <>
            {loading === true?<Spinner type="cover" />:
            <>
            <div className="teacherDetails--hero">
                <div className="teacherDetails__info">
                    <div className="who">
                        <img src={TeacherImage} alt="teacher-img" />
                        <div className="who__headers">
                            <h2>{teacherDetails.name}</h2>
                            <h5>Instructor</h5>
                        </div>
                        
                    </div>
                    <p className="biography">
                    {teacherDetails.name} is the author of “Elm in Action” from Manning Publications. He’s written a lot of JavaScript, 
                    dating back to the pre-jQuery days, but since 2015 has spent more time writing Elm and Rust. Over the years he’s created several 
                    popular Elm packages, including elm-css, elm-test, and elm-json-decode-pipeline; 
                    the JavaScript seamless-immutable library; and a fully-featured programming language compiler in Rust.
                    He hosts both the Philadephia Elm Meetup and the Philadelphia Rust Meetup.
                    </p>                
                </div>
            </div>
            <div className="teacherDetails">
                <div className="teacherDetails__courses">
                    <div className="title">
                        <IconBtn type="book"/>
                        <h2>{teacherDetails.name}'s Courses</h2>
                    </div>
                    <div className="items-wrapper">
                    { teacherCourses && teacherCourses.length>0 ? teacherCourses.map((course: any) => {
                            const {id,  title, description, slug, duration, price, minimumskill,scholarshipavailable, published, thumbnail, courseContent} = course;                                    
                            return (
                                    <div key={id} onClick={()=>handleCourseClick(slug)}  className="item" data-aos="fade-up" data-aos-duration="500">
                                        <h3>{title}</h3>
                                        <img src={thumbnail === 'no-photo.jpg'?courseThumbnail: thumbnail} alt="courseThumbnail" />
                                        <p>{description}</p>
                                        <div className="cta-btn">
                                            <Button type="primary" value="Watch Free preview" onClick={e=> console.log('watch free ')}/>
                                            <Button type="primary" value="Get full Access" onClick={e=> console.log('get full access')}/>
                                        </div>
                                    </div>
                            )
                        })
                        :
                        <div className="empty-courses">
                            <p>{teacherDetails.name} has no Courses yet </p>
                            <div className="primary-btn">
                                <button onClick={e=>history.push('/teachers')} className="btn">Check other instructor's courses</button>
                            </div>
                        </div>
                    }
                </div>
                </div>
            </div>
            </>
        }
    </>
    )
}

export default TeacherDetails
