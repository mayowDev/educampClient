import React,{useState, useEffect, Fragment} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom'
// import Card from "../../components/Card";
// import {ICourseDetails} from './types';
// import sampleImage from '../../assets/images/coursesThumbnails/react-thumbnail.jpg';
import IconBtn from '../../components/IconBtn';
import Rating from '../../components/Rating'
import './CourseDetails.scss'
const CourseDetails = (props) => {
    const { addToCart, getCourseByName, getTeacher, courseDetails} = props
    const [teacher, setTeacher]= useState<any>({})
    const [details, setDetails] = useState<any>({})
    const {slug}:any = useParams()
    const handleAddToCart =async (courseid) => {
        await addToCart({courseid})
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
                        <ul className="course-category">
                            <li><Link to="#">Development</Link></li>
                            <li><Link to="#">Data Science</Link></li>
                            <li><Link to="#">Machine Learning</Link></li>
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
                            <div>Gift this course</div>
                        </div>
                    </div>
                    <div className="courseDetails__contetnt--briefIntro-section"></div>
                    <div className="courseDetails__contetnt--video-section"></div>
                    <div className="courseDetails__contetnt--requirement-section"></div>

                </div>
                <div className="courseDetails__sidebar">
                    <div className="courseDetails__sidebar--course-intro">
                        <h4>Preview this course</h4>
                        {/* <video src={SampleVideo} /> */}
                        {/* <IconBtn className="play-btn" type="play"/> */}
                    </div>
                    <div className="cta-btns">
                        <button onClick={()=>handleAddToCart(slug)} className="btn cart-btn">Add to cart</button>
                        <button onClick={()=>handleExpressCheckout(slug)} className="secondary-btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseDetails
