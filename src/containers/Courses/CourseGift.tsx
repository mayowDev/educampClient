import React, {useEffect} from 'react';
import {toast} from 'react-toastify';
import {useHistory} from "react-router-dom";
import sampleImage from '../../assets/images/coursesThumbnails/react-thumbnail.jpg';
import './style.scss';

const CourseGift = (props) => {
    const {getCourseByName, courseDetails} = props;
    const history = useHistory()

    const handleGiftCourse = (e)=>{
        e.preventDefault();
        toast.dark("Course gift sent!");
    }
    const slug = props.location.pathname.split('/')[2];
    useEffect(() =>{
        getCourseByName(slug)
    },[])
    // console.log('courseDetails', courseDetails)
    return (
        <div className="courseGift">
            <h2>Gift Course</h2>
            <div className="courseGift__content">
                <div className="courseGift__content--receiver">
                    <form onSubmit={handleGiftCourse}>
                        <input name="name" placeholder="Type receiptent's name here"  type="text" />
                        <input name="email" placeholder="Type receiptent's email here" type="email" />
                        <input type="date" />
                        <textarea placeholder="your message here" />
                        <div className="cart-btn">
                            <button className="btn" type="submit">Proceed to checkout</button>
                        </div>
                    </form>
                </div>
                <div className="courseGift__content--item">
                    <div className="img-container">
                        <img src={sampleImage} alt="course-thumbnail" />
                    </div>
                    <div className="text-container">
                        <h3 onClick={()=> history.push(`/courses/${courseDetails.slug}`)}>{courseDetails.title}</h3>
                        <p>an online course by {courseDetails.createdBy}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CourseGift
