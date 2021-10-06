import React from 'react'
import {Link} from 'react-router-dom'
import IconBtn from '../../components/IconBtn';
import Analytics from '../../assets/icons/analysis-chart.svg'
import Like from '../../assets/icons/thumb-up.svg'
import Video from '../../assets/icons/video.svg'
import Book from '../../assets/icons/books.svg'
import Emoji from '../../assets/icons/happy-emoji.svg'
import Engaging from '../../assets/images/engaging-course.jpg'
import VideoCreation from '../../assets/images/video-creation.jpg'
import BuildAudeice from '../../assets/images/build-audience.jpg'
import NewComer from '../../assets/images/newcomer-challenge.jpg'

const TeacherProfile = (props) => {
    const { userProfile} = props;
        console.log('role',userProfile?.role, '!!userProfile', !!userProfile.id)


    return (
        <div className="teacherProfile">
            <div className="teacherProfile__sidebar">
                <IconBtn className="teacher--profile" type="user" />
                <IconBtn className="teacher--chats" type="chat" />
                <IconBtn className="teacher--setting" type="setting" />
                <IconBtn className="teacher--help" type="question" />
            </div>
            <div className="teacherProfile__content">
                <div className='teacherProfile__content--cta'>
                    <div>
                        <IconBtn  type="book" />
                        <p>Jump into course creation </p>
                    </div>
                    <div className="cta-btn">
                        <button>Create your course</button>
                    </div>
                    
                </div>
                <div className="teacherProfile__content--guide">   
                    <h4>Based on your experience, we think these resources will be helpful.</h4>
                    <div className="engage">
                        <figure>
                            <img src={Engaging} alt="engaging-course-icon"/>
                            <figcaption>
                                <h6>Create an Engaging Course</h6>
                                Whether you've been teaching for years or are teaching for the first time, 
                                you can make an engaging course. We've compiled resources and best practices to help you get to the next level, 
                                no matter where you're starting.
                                <Link to="#">Get Started</Link>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="video-audience">
                        <figure>
                            <img src={VideoCreation} alt="video-creation-icon"/>
                            <figcaption>
                                <h6>Get Started with Video</h6>
                                <p>Quality video lectures can set your course apart. Use our resources to learn the basics.</p>
                                <Link to="#">Get Started</Link>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={BuildAudeice} alt="build-audience-icon"/>
                            <figcaption>
                                <h6>Build Your Audience</h6>
                                <p>Set your course up for success by building your audience.</p>
                                <Link to="#">Get Started</Link>
                            </figcaption>
                        </figure>
                    </div>  
                    <div className="challenge">
                        <figure>
                            <img src={NewComer} alt="newcomer-challenge-icon"/>
                            <figcaption>
                                <h6>Join the Newcomer Challenge!</h6>
                                Get exclusive tips and resources designed to help you launch your first course faster! 
                                Eligible instructors who publish their first course on time will receive a special bonus to celebrate. 
                                Start today!
                                <Link to="#">Get Started</Link>
                            </figcaption>
                        </figure>
                    </div>           
                </div>

                <div className="teacherProfile__content--support">
                    <h4>Have questions? Here are our most popular resources</h4>  
                    <div className="figures-container">
                        <figure>
                            <img src={Video} alt="video-icon"/>
                            <h6>Test video</h6>
                            <figcaption>Send us a sample video and get expert feedback.</figcaption>
                        </figure>
                        <figure>
                            <img src={Like} alt="like-icon"/>
                            <h6>Instructor Community</h6>
                            <figcaption>Connect with experienced instructors. Ask questions, browse discussions, and more.</figcaption>
                        </figure>
                        <figure>
                            <img src={Book} alt="book-icon"/>
                            <h6>Teaching center</h6>
                            <figcaption>Learn about best practices for teaching on Udemy.</figcaption>
                        </figure>
                        <figure>
                            <img src={Analytics} alt="analytics-icon"/>
                            <h6>Marketplace insiders</h6>
                            <figcaption>Validate your course topic by exploring our marketplace supply and demand.</figcaption>
                        </figure>
                        <figure>
                            <img src={Emoji} alt="support-icon"/>
                            <h6>Help and support</h6>
                            <figcaption>Browse our Help Center or contact our support team.</figcaption>
                        </figure>

                    </div>                  
                    
                </div>
            </div>

        </div>
    )
}

export default TeacherProfile