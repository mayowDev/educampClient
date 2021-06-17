import React from 'react';
import {H2, P1} from '../Typography';
import {ICardProps} from './types';
import ImageLoader from "../ImageLoader";
import defaultCourseImage from "../../assets/images/defaultCourseImage.png"
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import './style.scss';


const Card: React.FC<ICardProps> = ({imgSrc=defaultCourseImage, title, description, onClick, 
    horizontal, noFade}) => {

    const RenderContent = () => (
        <>
            <div className={`card ${horizontal ? '' : 'card--horizontal'}`} onClick={onClick}>
                <div className={`card__img`}>
                    <ImageLoader imgUrls={Array.isArray(imgSrc) ? [...imgSrc] : [imgSrc]}/>
                </div>
                <div className={`card__content`}>
                    <H2 value={title}/>
                    <P1 className="description" value={description || 'loremipsum'}/>
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

