import React from 'react'
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import teachWay from '../../assets/icons/teachWay.jpg'
import inspire from '../../assets/icons/inspire.jpg'
import getRewarded from '../../assets/icons/getRewarded.jpg'
const TeacherBoarding = () => {
    return (
        <ScrollAnimation>
            <div className="teacherBoarding">
                <div  className="teacherBoarding__hero">
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
            </div>
        </ScrollAnimation>

    )
}

export default TeacherBoarding
