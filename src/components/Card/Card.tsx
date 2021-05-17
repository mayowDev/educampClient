import React from 'react';
import {H2, P1, P3,} from '../Typography';

import {ICardProps} from './types';
import './style.scss';

import Button from "../Button";
import ImageLoader from "../ImageLoader";
import defaultCourseImage from "../../assets/images/defaultCourseImage.png"
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Card: React.FC<ICardProps> = ({style,    event, imgSrc=defaultCourseImage, title, description, onClick, 
    horizontal, address,  handleRegister, handleUnRegister, noBorder, registered, className, course, noFade}) => {

    // const [isdisable, handleDisable] = useState(false);
    // const [isInfo, handleInfo] = useState(false);

    const RenderContent = () => (
        <>
            <div
                className={`card ${horizontal ? '' : 'card--horizontal'} ${event ? 'card--event' : ''} ${noBorder ? 'no-border' : ''} ${className || ''} 
                ${course ? 'card--course' : ''}`}
                onClick={ () => {console.log('course onClick ')}} style={style || undefined}
                >

                <div className={`img ${address ? 'address' : ''}`}>
                    <ImageLoader imgUrls={Array.isArray(imgSrc) ? [...imgSrc] : [imgSrc]}/>
                </div>

                <div className={`${title ? 'right' : ''}`}>
                    <H2 value={title}/>
                    
                    
                    <P1 className="description" value={description || 'loremipsum'}/>
                   
                    <div className='buttons-flex'>
                        <Button
                            value='Learn more'
                            size="medium"
                            className='button__bright btn-collective'
                            type="primary"
                            onClick={onClick}
                        />
                        {
                            registered ?
                                <Button
                                    value="Start Course"
                                    size="medium"
                                    className='button__dark btn-event'
                                    onClick={onClick}
                                />
                                :
                            <>
                                <Button
                                    value={!registered ? 'Register' : 'Unregister'}
                                    size="medium"
                                    className={`${!registered ? 'button__bright' : 'button__dark'} btn-event`}
                                    onClick={!registered ? handleRegister : handleUnRegister}
                                />
                                {registered && <P1 value="You are registered for this course."/>}
                            </>
                        }

                    </div>
                    
                </div>
            </div>
        </>
    );

    return (
        <>
            {
                noFade ? (
                    <>
                        <RenderContent />
                    </>
                ) : (
                    <ScrollAnimation>
                        <RenderContent />
                    </ScrollAnimation>
                )
            }
        </>
    )
};

export default Card;

