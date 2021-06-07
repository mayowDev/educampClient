import React from 'react';
import TeacherImage from '../../assets/images/teachers/teacher.jpg'
import courseThumbnail from '../../assets/images/coursesThumbnails/modern-react-thumb.jpg'
import IconBtn from '../../components/IconBtn';
import Button from '../../components/Button';
const TeacherDetails = () => {
    return (
        <>
        <div className="teacherDetails--hero">
            <div className="teacherDetails__info">
                <div className="who">
                    <img src={TeacherImage} alt="teacher-img" />
                    <div className="who__headers">
                        <h2>Richard</h2>
                        <h5>Wokr Place</h5>
                    </div>
                    
                </div>
                <p className="biography">
                Richard is the author of “Elm in Action” from Manning Publications. He’s written a lot of JavaScript, 
                dating back to the pre-jQuery days, but since 2015 has spent more time writing Elm and Rust. Over the years he’s created several 
                popular Elm packages, including elm-css, elm-test, and elm-json-decode-pipeline; 
                the JavaScript seamless-immutable library; and a fully-featured programming language compiler in Rust.
                He hosts both the Philadephia Elm Meetup and the Philadelphia Rust Meetup.
                </p>                
            </div>
        </div>
        <div className="teacherDetails">
            <div className="teacherDetails__courses">
                <div className="title">
                    <IconBtn type="book"/>
                    <h2>Richard's Courses</h2>
                </div>
                <div className="items-wrapper">
                    <div className="item">
                         <h3>Modern Raect and Redux name</h3>
                        <img src={courseThumbnail} alt="courseThumbnail" />
                         <p>
                            Richard is the author of “Elm in Action” from Manning Publications. He’s written a lot of JavaScript, 
                            dating back to the pre-jQuery days, but since 2015 has spent more time writing Elm and Rust. Over the years he’s created several 
                            popular Elm packages, including elm-css, elm-test, and elm-json-decode-pipeline; 
                        </p>
                        <div className="cta-btn">
                            <Button type="primary" value="Watch Free preview" onClick={e=> console.log('watch free ')}/>
                            <Button type="primary" value="Get full Access" onClick={e=> console.log('get full access')}/>
                        </div>
                    </div>
                    <div className="item">
                         <h3>Modern Raect and Redux name</h3>
                        <img src={courseThumbnail} alt="courseThumbnail" />
                         <p>
                            Richard is the author of “Elm in Action” from Manning Publications. He’s written a lot of JavaScript, 
                            dating back to the pre-jQuery days, but since 2015 has spent more time writing Elm and Rust. Over the years he’s created several 
                            popular Elm packages, including elm-css, elm-test, and elm-json-decode-pipeline; 
                        </p>
                        <div className="cta-btn">
                            <Button type="primary" value="Watch Free preview" onClick={e=> console.log('watch free ')}/>
                            <Button type="primary" value="Get full Access" onClick={e=> console.log('get full access')}/>
                        </div>
                    </div>
                    <div className="item">
                         <h3>Modern Raect and Redux name</h3>
                        <img src={courseThumbnail} alt="courseThumbnail" />
                         <p>
                            Richard is the author of “Elm in Action” from Manning Publications. He’s written a lot of JavaScript, 
                            dating back to the pre-jQuery days, but since 2015 has spent more time writing Elm and Rust. Over the years he’s created several 
                            popular Elm packages, including elm-css, elm-test, and elm-json-decode-pipeline; 
                        </p>
                        <div className="cta-btn">
                            <Button type="primary" value="Watch Free preview" onClick={e=> console.log('watch free ')}/>
                            <Button type="primary" value="Get full Access" onClick={e=> console.log('get full access')}/>
                        </div>
                    </div>
                    <div className="item">
                         <h3>Modern Raect and Redux name</h3>
                        <img src={courseThumbnail} alt="courseThumbnail" />
                         <p>
                            Richard is the author of “Elm in Action” from Manning Publications. He’s written a lot of JavaScript, 
                            dating back to the pre-jQuery days, but since 2015 has spent more time writing Elm and Rust. Over the years he’s created several 
                            popular Elm packages, including elm-css, elm-test, and elm-json-decode-pipeline; 
                        </p>
                        <div className="cta-btn">
                            <Button type="primary" value="Watch Free preview" onClick={e=> console.log('watch free ')}/>
                            <Button type="primary" value="Get full Access" onClick={e=> console.log('get full access')}/>
                        </div>
                    </div>
                    <div className="item">
                         <h3>Modern Raect and Redux name</h3>
                        <img src={courseThumbnail} alt="courseThumbnail" />
                         <p>
                            Richard is the author of “Elm in Action” from Manning Publications. He’s written a lot of JavaScript, 
                            dating back to the pre-jQuery days, but since 2015 has spent more time writing Elm and Rust. Over the years he’s created several 
                            popular Elm packages, including elm-css, elm-test, and elm-json-decode-pipeline; 
                        </p>
                        <div className="cta-btn">
                            <Button type="primary" value="Watch Free preview" onClick={e=> console.log('watch free ')}/>
                            <Button type="primary" value="Get full Access" onClick={e=> console.log('get full access')}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default TeacherDetails
