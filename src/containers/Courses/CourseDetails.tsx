import React from 'react'
// import Card from "../../components/Card";
// import {ICourseDetails} from './types';
// import courseThumbnail from '../../assets/images/coursesThumbnails/react-thumbnail.jpg'
// import 
const CourseDetails = (props) => {
    const {title, description} = props
    return (
        <div className="courseDetails">
            <div className="courseDetails__contetnt">
                <div className="courseDetails__contetnt--hero-section">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="courseDetails__contetnt--briefIntro-section"></div>
                <div className="courseDetails__contetnt--video-section"></div>
                <div className="courseDetails__contetnt--requirement-section"></div>

            </div>
            <div className="courseDetails__sidebar">

            </div>
        </div>
    )
}

export default CourseDetails
