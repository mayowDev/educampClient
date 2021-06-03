import React from 'react';
import {H2, P1} from '../Typography';
import {ICardProps} from './types';
import Button from "../Button";
import ImageLoader from "../ImageLoader";
import defaultCourseImage from "../../assets/images/defaultCourseImage.png"
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import './style.scss';


const Card: React.FC<ICardProps> = ({imgSrc=defaultCourseImage, title, description, onClick, 
    horizontal,  handleRegister, handleUnRegister, registered, noFade}) => {

    const RenderContent = () => (
        <>
            <div className={`card ${horizontal ? '' : 'card--horizontal'}`} onClick={ () => {console.log('course onClick ')}}>
                <div className={`card__img`}>
                    <ImageLoader imgUrls={Array.isArray(imgSrc) ? [...imgSrc] : [imgSrc]}/>
                </div>
                <div className={`card__content`}>
                    <H2 value={title}/>
                    <P1 className="description" value={description || 'loremipsum'}/>
                    {/* <div className='buttons-flex'>
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

                    </div> */}
                    
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

