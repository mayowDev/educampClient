import React from 'react'
import IconBtn from '../../components/IconBtn';
import Analytics from '../../assets/icons/analysis-chart.svg'
import Like from '../../assets/icons/thumb-up.svg'
import Video from '../../assets/icons/video.svg'
import Book from '../../assets/icons/books.svg'
import Emoji from '../../assets/icons/happy-emoji.svg'

//thumb-up.svg
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
                <div className="teacherProfile__content--support">
                    <h5>Have questions? Here are our most popular resources</h5>  
                    <div className="figures-container">
                        <figure>
                            <img src={Video} alt="video-icon"/>
                            <h6>Test video</h6>
                            <figcaption>Send us sample video and get expert feedback</figcaption>
                        </figure>
                        <figure>
                            <img src={Like} alt="like-icon"/>
                            <h6>Instructor Community</h6>
                            <figcaption>Send us sample video and get expert feedback</figcaption>
                        </figure>
                        <figure>
                            <img src={Book} alt="book-icon"/>
                            <h6>Teaching center</h6>
                            <figcaption>Send us sample video and get expert feedback</figcaption>
                        </figure>
                        <figure>
                            <img src={Analytics} alt="analytics-icon"/>
                            <h6>Marketplace insiders</h6>
                            <figcaption>Send us sample video and get expert feedback</figcaption>
                        </figure>
                        <figure>
                            <img src={Emoji} alt="support-icon"/>
                            <h6>Help and support</h6>
                            <figcaption>Send us sample video and get expert feedback</figcaption>
                        </figure>

                    </div>                  
                    
                </div>
            </div>

        </div>
    )
}

export default TeacherProfile