import React, {useState} from 'react'
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import Accordion from '../../components/Accordion'

import teachWay from '../../assets/icons/teachWay.jpg'
import inspire from '../../assets/icons/inspire.jpg'
import getRewarded from '../../assets/icons/getRewarded.jpg'
import PlanImage from '../../assets/images/teachers/plan-your-curriculum.jpg'
import LaunchImage from '../../assets/images/teachers/launch-your-course.jpg'
import RecordImage from '../../assets/images/teachers/record-your-video.jpg'
import Teacher from '../../assets/images/teachers/teacher.jpg'
import support1 from '../../assets/images/support1.jpg'
import support2 from '../../assets/images/support2.jpg'
import HeroImg from '../../assets/images/teachers/teachHeromobile.jpg'

type IActiveTab = 'plan' | 'record' | 'launch'
const TeacherBoarding = () => {
    const [activeTab, setActiveTab] = useState<IActiveTab>('plan');
    const handleTeacherBoarding = ()=> {
        console.log('handleTeacherBoarding')
    }
    const renderTeacherBoardingFormat = () => {
        //if user clicks outside this form close the popup
        return(
            <section id="" className="teacherBoarding__auth-popup">
          
            </section>
        )
    }
    return (
        <ScrollAnimation>
            <div className="teacherBoarding">
                <div  className="teacherBoarding__hero">
                    <img src={HeroImg} alt="HeroImg" />
                    <div className="teacherBoarding__hero--cta-box">
                        <h2>Come Teach with us</h2>
                        <p>Become an instructor and change lives — including your own</p>
                        <div className="cta-btn">
                            <button onClick={()=>console.log('handle taecher boarding deisgn ')} className="btn primary-btn">{ 'Get Started' }</button>
                        </div>
                    </div>
                </div>
                <div className="teacherBoarding__reasons">
                    <h3>so many reasons to start</h3>
                    <div className="teacherBoarding__reasons--items">
                        <div className="teacherBoarding__reasons--items-item">
                            <img alt="inspire-img" src={inspire}/>
                            <h4>inspire learners</h4>
                            <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
                        </div>
                        <div className="teacherBoarding__reasons--items-item">
                            <img alt="teachWay-img" src={teachWay}/>
                            <h4>Teach your way</h4>
                            <p>Publish the course you want, in the way you want, and always have of control your own content.</p>
                        </div>
                        <div className="teacherBoarding__reasons--items-item">
                            <img alt="getRewarded-img" src={getRewarded}/>
                            <h4>Get rewarded</h4>
                            <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
                        </div>
                    </div>
                </div>
                <div className="teacherBoarding__stats">
                    <div>
                        <span className="number">40M</span>
                        <span>Students</span>  
                    </div>
                    <div>
                        <span className="number">60+</span>
                        <span>Languages</span>  
                    </div>
                    <div>
                        <span className="number">480m</span>
                        <span>Enrollments</span>  
                    </div>
                    <div>
                        <span className="number">180+</span>
                        <span>Countries</span>  
                    </div>
                    <div>
                        <span className="number">7,000+</span>
                        <span>Enterprise customers</span>  
                    </div>
                </div>
                <div className="teacherBoarding__steps">
                    <h3>How to begin</h3>
                    <ul className="nav-links">
                        <li className={`${activeTab === "plan"&&'active'}`}  onClick={() => setActiveTab("plan")}> plan your curriculum </li>
                        <li className={`${activeTab === "record"&&'active'}`} onClick={() => setActiveTab("record")}>record your videos</li>
                        <li className={`${activeTab === "launch"&&'active'}`} onClick={() => setActiveTab("launch")}>launch your course</li>
                    </ul>
                    { activeTab === "plan" &&
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
                    }
                    { activeTab === "record" &&
                    <div className="tabs">
                        <div className="tabs__content">
                            <p>
                            Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.
                            <p> If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.</p>
                            </p>
                            <h4>How we help you</h4>
                            <p>Our support team is available to help you throughout the process and provide feedback on test videos.</p>
                        </div>
                        <img src={RecordImage} alt="plan-your-cuririculum" />
                    </div>
                    }
                    { activeTab === "launch" &&
                    <div className="tabs">
                        <div className="tabs__content">
                            <p> 
                             Gather your first ratings and reviews by promoting your course through social media and your professional networks.
                             Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.
                            </p>
                            <h4>How we help you</h4>
                            <p>Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity with courses chosen for Udemy Business.</p>
                        </div>
                        <img src={LaunchImage} alt="plan-your-cuririculum" />
                    </div>
                    }
                </div>
                <div className="wrapper teacherBoarding__steps-accordion">
                    <h3>How to begin</h3>
                    <Accordion title="Plan your curriculum">
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
                            <img src={require('../../assets/images/teachers/plan-your-curriculum.jpg')} alt="plan-your-cuririculum" />
                        </div>
                    </Accordion>
                    <Accordion title="Record your video">
                        <div className="tabs">
                            <div className="tabs__content">
                                <p>
                                Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.
                                <p> If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.</p>
                                </p>
                                <h4>How we help you</h4>
                                <p>Our support team is available to help you throughout the process and provide feedback on test videos.</p>
                            </div>
                            <img src={RecordImage} alt="plan-your-cuririculum" />
                        </div>
                    </Accordion>
                    <Accordion title="Launch your course">
                        <div className="tabs">
                            <div className="tabs__content">
                                <p> 
                                Gather your first ratings and reviews by promoting your course through social media and your professional networks.
                                Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.
                                </p>
                                <h4>How we help you</h4>
                                <p>Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity with courses chosen for Udemy Business.</p>
                            </div>
                            <img src={LaunchImage} alt="plan-your-cuririculum" />
                        </div>
                    </Accordion>
                </div>
                <div className="teacherBoarding__feedback">
                    <div className="container" >
                        <img src={Teacher} alt="teacher" />
                        <div className="content">
                            <p> “I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. 
                                While being a full-time instructor is hard work, it lets you work when, where, and how you want.”
                            </p>
                            <h4>Frank Khalid</h4>
                            <span>Data Science & IT Certifications</span>
                        </div>
                    </div>
                </div>
                <div className="teacherBoarding__support" >
                    <img className="support-1" src={support1} alt="support-1" />
                    <div>
                        <h3>You won’t have to do it alone</h3>
                        <p>Our <strong> Instructor Support Team </strong>is here to answer your questions and review your test video, while our <strong> Teaching Center </strong>
                        gives you plenty of resources to help you through the process. 
                        Plus, get the support of experienced instructors in our <strong> online community. </strong></p>
                    </div>
                    <img className="support-2" src={support2} alt="support-2" />
                </div>
                <div className="teacherBoarding__cta" >
                        <h3>Become an instructor today</h3>
                        <p> Join the world’s largest online learning marketplace.</p>
                        <button>Get started </button>
                </div>
            </div>
        </ScrollAnimation>

    )
}

export default TeacherBoarding
