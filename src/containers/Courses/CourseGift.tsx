import React, {useEffect, useState} from 'react';
// import {toast} from 'react-toastify';
import {useHistory} from "react-router-dom";
import sampleImage from '../../assets/images/coursesThumbnails/react-thumbnail.jpg';
import './style.scss';

const CourseGift = (props) => {
    const {getCourseByName, courseDetails, giftCourse} = props;
    const [courseid, setCourse] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const history = useHistory()
    const giftData = {email, name, courseid, courseDetails} 

    const handleGiftCourse = async (e)=>{
        e.preventDefault();
        const res = await giftCourse(giftData)
        if(res.payload.success){
            props.history.push({
                pathname: "/cart/checkout", state: { slug, OrderId:res.payload.OrderId }
            })
        }
    }
    const slug = props.location.pathname.split('/')[2];
    useEffect(() =>{
        getCourseByName(slug)
    },[])
    useEffect(() =>{
        if(courseDetails&&courseDetails.id){
            setCourse(courseDetails.id)
        }
    },[courseDetails&&courseDetails.id])
    // console.log('courseDetails', courseDetails)
    return (
        <div className="courseGift">
            <h2>Gift Course</h2>
            <div className="courseGift__content">
                <div className="courseGift__content--receiver">
                    <form onSubmit={handleGiftCourse}>
                        <input value={name} onChange={e=>setName(e.currentTarget.value)} name="name" placeholder="Type receiptent's name here"  type="text" />
                        <input value={email} onChange={e=>setEmail(e.currentTarget.value)} name="email" placeholder="Type receiptent's email here" type="email" />
                        {/* <input type="date" /> */}
                        {/* <textarea placeholder="your message here" /> */}
                        <div className="cart-btn">
                            <button onClick={handleGiftCourse} className="btn" type="submit">Proceed to checkout</button>
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
