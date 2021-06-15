import React,{useState, useEffect, Fragment} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom'
// import Card from "../../components/Card";
// import {ICourseDetails} from './types';
import sampleImage from '../../assets/images/coursesThumbnails/react-thumbnail.jpg';
import IconBtn from '../../components/IconBtn';
import Rating from '../../components/Rating'
import './CourseDetails.scss'
const CourseDetails = (props) => {
    const { addToCart, getCourseByName, getTeacher, courseDetails} = props
    const [teacher, setTeacher]= useState<any>({})
    const [details, setDetails] = useState<any>({})
    const {slug}:any = useParams()
    const history = useHistory()
    const handleAddToCart =async (courseid) => {
        await addToCart({courseid})
        history.push('/cart')
    }
    const handleExpressCheckout = async (courseid) => {
        //redirect to 'localhots:3000/cart/checkout/express/course/903744/?discountCode=KEEPLEARNING'
    }
    useEffect(() =>{
        getCourseByName(slug)
    },[])
    useEffect(() =>{
        if(courseDetails && courseDetails.id){
            setDetails(courseDetails)
        }
    },[courseDetails && courseDetails.id])
    return (
        <Fragment>
            <div className="courseDetails">
                <div className="courseDetails__contetnt">
                    <div className="courseDetails__contetnt--hero-section">
                        <div className="courseDetails__content--hero-section-container">
                            <ul className="course-category">
                                <li><Link to="#">Development</Link></li>
                                <li><Link to="#">Web Development</Link></li>
                                <li><Link to="#">React</Link></li>
                            </ul>
                            <h1>{details&&details.title}</h1>
                            <p>{details.description}</p>
                            <Rating/>
                            <div className="teacher">
                                <span>Created by </span>
                                <Link to="#">{details.createdBy}</Link>
                            </div>
                            <div className="btn-actions">
                                <div className="actions-icons">
                                    <h6>Wishlist</h6> 
                                    <IconBtn type="heart2"/>
                                </div>
                                <div className="actions-icons">
                                    <h6>Share</h6>
                                    <IconBtn type="share2"/>                            
                                </div>
                                <div className="actions-icons">Gift this course</div>
                            </div>
                        </div>
                    </div>
                    <div className="courseDetails__contetnt--briefIntro-section">
                        <div className="courseDetails__contetnt--briefIntro-section-container">
                            <h3>What you'll learn</h3>
                            <ul className="course-objectives">
                                <li>Build amazing single page applications with React JS and Redux</li>
                                <li>Master fundamental concepts behind structuring Redux applications</li>
                                <li>Realize the power of building composable components</li>
                                <li>Be the engineer who explains how Redux works to everyone else, because you know the fundamentals so well</li>
                                <li>Become fluent in the toolchain supporting React, including NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax</li>
                            </ul>
                        </div>
                    </div>
                    <div className="courseDetails__contetnt--video-section"></div>
                    <div className="courseDetails__contetnt--requirement-section"></div>
                </div>
                <div className="courseDetails__sidebar">
                    <div className="courseDetails__sidebar--course-intro">
                        {/* <h4>Preview this course</h4> */}
                        {/* <video src={SampleVideo} /> */}
                        {/* <img src={sampleImage} alt="course-thumbnail" /> */}
                        {/* <IconBtn className="play-btn" type="play"/> */}
                    </div>
                    <div className="cta-btns">
                        <button onClick={()=>handleAddToCart(details.id)} className="btn cart-btn">Add to cart</button>
                        <button onClick={()=>handleExpressCheckout(slug)} className="secondary-btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseDetails
