import React from 'react'
import IconBtn from '../../components/IconBtn';
const TeacherProfile = () => {
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
                        <img src="" alt="test-video"/>
                        <h6>Test video</h6>
                        <figcaption>Send us sample video and get expert feedback</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt="test-video"/>
                        <h6>Test video</h6>
                        <figcaption>Send us sample video and get expert feedback</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt="test-video"/>
                        <h6>Test video</h6>
                        <figcaption>Send us sample video and get expert feedback</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt="test-video"/>
                        <h6>Test video</h6>
                        <figcaption>Send us sample video and get expert feedback</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt="test-video"/>
                        <h6>Test video</h6>
                        <figcaption>Send us sample video and get expert feedback</figcaption>
                    </figure>

                    </div>                  
                    
                </div>
            </div>

        </div>
    )
}

export default TeacherProfile