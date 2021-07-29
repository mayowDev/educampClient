import React,{useState, useEffect,  Fragment} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom'
// import {ICourseDetails} from './types';
import IconBtn from '../../components/IconBtn';
import ShareBtn from '../../components/ShareBtn'
import Rating from '../../components/Rating'
import { getShareURL} from '../../utils'
import './courseDetails.scss'

const CourseDetails = (props) => {
    const { addToCart, addToWishlist, getCourseByName, removeFromCart, removeFromWishlist, userProfile, favouriteItems,  cartItems, courseDetails} = props
    const [isFavourite, setIsFavourite]= useState<boolean>(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isCartitem, setIsCartitem]= useState<boolean>(false)
    const [details, setDetails] = useState<any>({})
    const [active , setActive] = useState<any>(false)
    const [isFree, setIsFree] = useState<boolean>(false)
    const {slug}:any = useParams()
    const history = useHistory()

    const handleAddToCart =async (courseid) => {
        if(isAuthenticated){
            if(isCartitem){return history.push(`/cart`)}
            await addToCart({courseid})
            if(favouriteItems && favouriteItems.some(item => item.id === courseDetails.id)){await removeFromWishlist(courseid)}
        }
        return history.push(`/login`)   
    }
    const handleAddToWishlist = async (courseid:string) =>{
        if(favouriteItems && favouriteItems.some(item => item.id === courseDetails.id)){
            await removeFromWishlist(courseid)
            setIsFavourite(false)
        }else{
            if(isAuthenticated){
                console.log('isAuthenticated', isAuthenticated)
                await addToWishlist({courseid})
                setIsFavourite(true)
                if(isCartitem){removeFromCart(courseid)}
            }else if(isAuthenticated === false){return history.push(`/login`)}
               
        }
    }
    useEffect(() => {
        if(userProfile&& userProfile.id){
            setIsAuthenticated(true)
        }
    }, [userProfile&&userProfile.id]); 
    const handleExpressCheckout = async (slug:string) => {
        if(isAuthenticated){
            props.history.push({
                pathname: "/cart/checkout", state: { slug, isExpressCheckout: true}
            })
        }else{return history.push(`/login`)   }
        
    }
    
    useEffect(() =>{
        getCourseByName(slug)
    },[slug])

    useEffect(() =>{
        if(courseDetails && courseDetails.id){
            setDetails(courseDetails)
            if(courseDetails&&courseDetails.price == 0){setIsFree(true)}
            if(cartItems && cartItems.some(item => item.id === courseDetails.id)){
                setIsCartitem(true)
            }else{
                setIsCartitem(false)
            }
            if(favouriteItems && favouriteItems.some(item => item.id === courseDetails.id)){
                setIsFavourite(true)
            }else{
                setIsFavourite(false)
            }
        }
    },[cartItems&&cartItems.length, courseDetails&&courseDetails.id, favouriteItems&&favouriteItems.length])

    const handleAccordian = ()=>{
        console.log('active')
    }    
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
                            <div className="mobile-hero">
                                <div className="courseDetails__sidebar--course-intro">
                                    <IconBtn onClick={()=>console.log("play preview course")} className="play-btn" type="play"/>
                                    <h4>Preview this course</h4>
                                </div>
                            </div>
                            <h1>{details&&details.title}</h1>
                            <p>{details.description}</p>
                            <Rating/>
                            <div className="teacher">
                                <span>Created by </span>
                                <Link to="#">{details.createdBy}</Link>
                            </div>
                            <div className="btn-actions">
                                <div onClick={()=>handleAddToWishlist(details.id)} className="actions-icons">
                                    <h6>{isFavourite? 'Wishlisted' : 'Wishlist'}</h6> 
                                    <IconBtn className={isFavourite? 'icon-btn--favourite' : ''} type="heart2"/>
                                </div>
                                <div className="actions-icons">
                                    <h6>Share</h6>
                                    <ShareBtn up shareUrl={getShareURL('courses', slug || details.slug)}/>
                                </div>
                                <div onClick={()=>history.push(`/gift/${details.slug}`)} className="actions-icons">Gift this course</div>
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
                    <div className="courseDetails__contetnt--cuririculum-section">
                        <div className="courseDetails__contetnt--cuririculum-section-header">
                            <h3>Course content</h3>
                            <div className="course-length">
                                <ul>
                                    <li>7 sections</li>
                                    <li>95 lectures</li>
                                    <li>9h 3m total length</li>
                                </ul>
                                <button className="expand-sections">expand all sections</button>
                            </div>
                        </div>
                        <div  className="courseDetails__contetnt--cuririculum-section-container">
                            <div className="accord" onClick={handleAccordian}>
                                <span className={active ?"accord__active": ""}>Section</span>
                                <ul><li>2 lectures</li><li>5 min</li></ul>

                            </div>
                            <div className="panel">
                                <p>111Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="accord" onClick={handleAccordian}>
                                <span className={active ?"accord__active": ""}>Section</span>
                                <ul><li>2 lectures</li><li>5 min</li></ul>
                            </div>
                            <div className="panel">
                                <p>111Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="accord" onClick={handleAccordian}>
                                <span className={active ?"accord__active": ""}>Section</span>
                                <ul><li>2 lectures</li><li>5 min</li></ul>
                            </div>
                            <div className="panel">
                                <p>111Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="accord" onClick={handleAccordian}>
                                <span className={active ?"accord__active": ""}>Section</span>
                                <ul><li>2 lectures</li><li>5 min</li></ul>
                            </div>
                            <div className="panel">
                                <p>111Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="courseDetails__contetnt--requirement-section">
                        <div className="courseDetails__contetnt--requirement-section-header">
                            <h3>Requirements</h3>
                        </div>
                        <ul>
                            <li>Some programming experience</li>
                            <li>Basic computer / laptop and internet </li>
                        </ul>
                    </div>
                    <div className="courseDetails__contetnt--reviews-section">
                        <h4>Student feedback</h4>
                        <div className="container">
                            <div className="summary">
                                <p>4.5</p>
                                {/* <Rating/> */}
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <div className="ratings-percentages">
                                <div className="item">
                                    <span>5 star</span>
                                    <span>55%</span>
                                </div>
                                <div className="item">
                                    <span>4 star</span>
                                    <span>32%</span>
                                </div>
                                <div className="item">
                                    <span> 3 star</span>
                                    <span>4%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="courseDetails__sidebar">
                    <div className="courseDetails__sidebar--course-intro">
                        <IconBtn className="play-btn" type="play"/>
                        <h4>Preview this course</h4>
                    </div>
                    <div className="course-price">
                        <span>{isFree? 'Free' : `$${details.price}.99`}</span>
                        <div className="warning">
                            <span className="fa fa-clock-o"/>
                            <p>12 hours left at this price!</p>
                        </div>
                        <div className="cta-btns purchase-section">
                            <button onClick={()=>handleAddToCart(details.id)} className="btn cart-btn">{isCartitem? 'Go to Cart': 'Add to cart'}</button>
                            <button onClick={()=>handleExpressCheckout(slug)} className="secondary-btn">Buy Now</button>
                        </div>
                        <div className="refund-message">
                            <p> 30-Day Money-Back Guarantee.</p>
                        </div>
                        <div className="summary-info">
                            <h3>This course includes:</h3>
                            <div className="info-icons">
                                <span className="fa fa-tv"/>
                                <p>25 hours on-demand video</p>
                            </div>
                            <div className="info-icons">
                                <span className="fa fa-file"/>
                                <p>13 articles</p>
                            </div>
                            <div className="info-icons">
                                <span className="fa fa-clock-o"/>
                                <p>Full lifetime access</p>
                            </div>
                            <div className="info-icons">
                                <span className="fa fa-certificate"/>
                                <p>Certificate of completion</p>
                            </div>
                            <div className="info-icons">
                                <span className="fa fa-mobile"/>
                                <p>Access on mobile and TV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CourseDetails
