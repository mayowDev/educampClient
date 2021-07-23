
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Slider from "react-slick";
import courseThumbnail from '../../assets/images/coursesThumbnails/react-thumbnail.jpg';
import Spinner from '../../components/Spinner';
import SearchResult from '../../components/SearchResult';
import Accordion from '../../components/Accordion';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import IconBtn from '../../components/IconBtn';
import Categories from './Categories';

import Teacher from '../../assets/images/teachers/promo-teacher.jpg'
import company1 from '../../assets/icons/company1.svg'
import company2 from '../../assets/icons/company2.svg'
import company3 from '../../assets/icons/company3.svg'
import company4 from '../../assets/icons/company4.svg'
import company5 from '../../assets/icons/company5.svg'
import HeroImg from '../../assets/images/home-hero-mobile.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Courses = (props) => {
    const [isFavourite, setIsFavourite]= useState<boolean>(false)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [isCartitem, setIsCartitem]= useState<boolean>(false)
    const [isRequestCanceled, setIsRequestCanceled]= useState<boolean>(false)
    const [isUserLeft, setIsUserLeft]= useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResponse, setSearchResponse] = useState<any>('')
    // const [courseTitles, setCourseTitles] =  useState<any>()
    const history = useHistory()
    const {courses, searchCourse, addToCart, addToWishlist, userProfile, removeFromCart, removeFromWishlist, isLoading, favouriteItems,  cartItems, courseDetails} = props

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
        setIsUserLeft(false)
    }
    const handleOnSearchItemClick = (route) => {
        history.push(route)
    }
    const handleCourseClick = (slug:string) => {
        history.push(`/courses/${slug}`)
    };
    const handleAddToCart =async (courseid) => {
        if(!isAuthenticated) return history.push(`/login`)   
        await addToCart({courseid})
    }
    const handleAddToWishlist = async (courseid:string) =>{
        if(isFavourite){
            await removeFromWishlist(courseid)
            setIsFavourite(false)
        }else{
            if(isAuthenticated){
                await addToWishlist({courseid})
                setIsFavourite(true)
                if(isCartitem){removeFromCart(courseid)}
            }
        }
    }
    useEffect(() => {        
        if(isUserLeft === true){
            const delayDebounceFn = setTimeout(() => {
                setSearchResponse(''); setSearchTerm('')
              }, 50)
              return () => clearTimeout(delayDebounceFn)
        }

    },[isUserLeft])
    useEffect(() => {
        const fetchCourses = async ()=> {
            let response = await searchCourse(searchTerm.trim())
            setSearchResponse(response&&response.payload)
        }
        if(searchTerm&&searchTerm.trim().length > 2  && isRequestCanceled == false){
            const delayDebounceFn = setTimeout(() => {
                fetchCourses()
              }, 1000)
              return () => clearTimeout(delayDebounceFn)
        }
    },[searchTerm&&searchTerm.trim().length])

    useEffect(() => {
        if(userProfile&& userProfile.id){
            setIsAuthenticated(true)
        }
    }, [userProfile&&userProfile.id]); 
    useEffect(() =>{
        if(courses && courses.length>0){
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
    },[cartItems&&cartItems.length, courses&&courses.length, favouriteItems&&favouriteItems.length])

    function Arrow(props) {
        let className = props.type === "next" ? "nextArrow" : "prevArrow";
        className += " arrow";
        const char = props.type === "next" ? 
            <span className="next position-top right-0">&#10095;</span>:
            <span className="prev position-top left-0">&#10094;</span>
        return (
            <span className={className} onClick={props.onClick}>{char}</span>
        );
    }
    const settings = {
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        accessibility: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <Arrow type="next" />,
        prevArrow: <Arrow type="prev" />,
        infinite: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 1,
                autoplay: false,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                initialSlide: 3,
                autoplay: false,
                }
            }
        ]
    };
    const renderCourses = () =>
        courses&&courses.map((course) => (
            <div key={course.id} onClick={()=>handleCourseClick(course.slug)} className="courses__card--item" data-aos="fade-up" data-aos-duration="500">
                <div className="content">
                    <img className="thumbnail" src={courseThumbnail} alt="course-img" />
                    <h3 className='big'>{course.title}</h3>
                    <p className="teacher">{course.createdBy}</p>
                    <div className="review">5 reviews</div>
                    <div className="price">{course.price == 0? 'Free': `$${course.price + .99 }` }</div>
                </div>
                <div  className="content-hover">
                    <h3 className='big'>{course.title}</h3>
                    <p className="teacher">{course.createdBy}</p>
                    <div className="review">5 reviews</div>
                    <div className="price">{course.price == 0? 'Free': `$${course.price + .99 }` }</div>
                    <div className="btn-actions">
                        <div className="cart-btn">
                            <button onClick={()=>handleAddToCart(course.id)} className="btn">Add to Cart</button>
                        </div>
                        {/* <Heart/> */}
                            <IconBtn onClick={()=>handleAddToWishlist(course.id)} className={isFavourite? 'icon-btn--favourite' : ''} type="heart"/>                        
                    </div>

                </div>
            </div>
        ));
        
    const featuredArray = [
        {
            topic:'Development', 
            item: {header:'Python', student: '28,212,736 students', header1:'Web Development', student1: '9,730,666 students', header2:'Machine Learning', student2:'5,155,969 students'} 
        },
        {
            topic:'Design', 
            item: {header:'Photoshop', student: '9,440,981 students', header1:'Graphic Design', student1: '2,730,666 students', header2:'Drawing', student2:'2,155,969 students'} 
        },
        {
            topic:'Software & IT',
            item: {header:'AWS Certificate', student:'4,440,981 students', header1:'Ethical Hacking', student1: '8,730,666 students', header2:'Cyber Security', student2:'5,155,969 students'}},
        {
            topic:'Business',
            item: {header:'SQL', student:'7,440,981 students',header1:'Financial Analysis', student1: '1,730,666 students', header2:'PMP', student2:'2,155,969 students'}},
    ]
   
    const renderFeaturedTopics = ()=> featuredArray&&featuredArray.map(({topic, item:{header, header1, header2, student, student1, student2}}) => (
        <div key={topic} onClick={()=>console.log(header)} className="featured__items--item">
            <h3>{topic}</h3>
            <div className="content">
                {[1].map(h=>(
                    <>
                    <h3>{header}</h3>
                    <span>{student}</span>    
                    <h3>{header1}</h3>  
                    <span>{student1}</span>  
                    <h3>{header2}</h3>  
                    <span>{student2}</span>  
                    </>
                )
                )}
            </div>
            
        </div>
    ));
    //Todo: add fetured topics accouridan where  eahc topic returns course card and hide the desktop featuredTopics
    return (
        <ScrollAnimation>
            <div className="courses">
                <div  className="courses__hero">
                    <img src={HeroImg} alt="HeroImg" />
                    <div className="courses__hero--search-box">
                        <h2>Learn from the best</h2>
                        <p>Real-world experts teaching real-world skills from $12.99 — sale ends today</p>
                        <input 
                            autoFocus
                            type='text'
                            autoComplete='off'   
                            onBlur={()=>{setIsUserLeft(true)}}                                
                            onKeyDown={({ nativeEvent }) => {nativeEvent.key === 'Backspace' ? setIsRequestCanceled(true) : setIsRequestCanceled(false) }}
                            onChange={handleSearchChange} value={searchTerm} placeholder="What do you want to learn?" 
                        />
                    </div>
                    {searchResponse&&searchResponse.length>0&&
                    <div className="courses__hero--search-result">
                        {searchResponse.length>0&&searchResponse.map((({title, slug}, idx)=>{
                            return(
                                <SearchResult onClick={()=>handleOnSearchItemClick(`courses/${slug}`)} url={`courses/${slug}`} title={title} id={idx}/>
                            )
                        }))
                        }
                    </div>
                    }
                </div>
                <div className="courses__title">
                    <h1>Top courses</h1>
                </div>
                {isLoading &&!courses ?
                    <Spinner type="cover" />
                    :
                    <Slider {...settings}>{renderCourses()}</Slider>
                }
                {/* <Accordion title="Plan your curriculum">
                        <div className="tabs">
                            <div className="tabs__content">
                                <p>
                                    You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.
                                    The way that you teach — what you bring to it — is up to you.
                                </p>
                                <h4>How we help you</h4>
                                <p>
                                    We offer plenty of resources on how to create your first course. 
                                    And, our instructor dashboard and curriculum pages help keep you organized.
                                </p>
                            </div>
                            <img src={PlanImage} alt="plan-your-cuririculum" />
                        </div>
                    </Accordion> */}
                <Categories/>
                <div className="featured" >
                    <h2 className='featured__title'>Featured topics by category </h2>
                    <div className="featured__items" data-aos="fade-up" data-aos-duration="500">
                        {renderFeaturedTopics()}
                    </div>
                    
                </div>
            </div>
            <div className="teacherPromo" >
                <div className="container" >
                    <img src={Teacher} alt="teacher-promo" />
                    <div className="content">
                        <h2>Become an instructor</h2>
                        <p> Top instructors from around the world teach millions of students on Educamp.
                            We provide the tools and skills to teach what you love.
                        </p>
                        <button>Start Teaching today</button>
                    </div>
                </div>
            </div>
            <div className="social-proof">
                <h3>Trusted by companies of all sizes</h3>
                <div className="companies">
                    <img src={company1} alt="company1" />
                    <img src={company2} alt="company2" />
                    <img src={company3} alt="company3" />
                    <img src={company4} alt="company4" />
                    <img src={company5} alt="company5" />
                </div>
            </div>
        </ScrollAnimation>
    )
};

export default Courses;