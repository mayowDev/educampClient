import React from 'react';
import {H2, P1, P3, SubTitle, Paragraph} from '../Typography';

import {ICardProps} from './types';
import './style.scss';

import Button from "../Button";
import ImageLoader from "../ImageLoader";
import defaultCourseImage from "../../assets/images/defaultCourseImage.png"
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Card: React.FC<ICardProps> = ({style,  bootcampName, subTitle, bootcamp,  event, imgSrc=defaultCourseImage, title, location, description, onClick, 
    horizontal, address, lenghts, moderatedBy, timeLine, handleRegister, handleUnRegister, noBorder, registered, className, course, noFade}) => {

    // const [isdisable, handleDisale] = useState(false);
    // const [isInfo, handleInfo] = useState(false);

    const RenderContent = () => (
        <>
            <div
                className={`card ${horizontal ? '' : 'card--horizontal'} ${event ? 'card--event' : ''} ${noBorder ? 'no-border' : ''} ${className || ''} 
                ${bootcamp ? 'card--bootcamp' : ''} ${course ? 'card--course' : ''}`}
                onClick={ () => {console.log('click disabled')}} style={style || undefined}
                >

                <div className={`img ${address ? 'address' : ''}`}>
                    <ImageLoader imgUrls={Array.isArray(imgSrc) ? [...imgSrc] : [imgSrc]}/>
                </div>

                <div className={`${event || bootcamp ? 'right' : ''}`}>
                    {event && <SubTitle className="moderate" value={`Moderated By: ${ moderatedBy===undefined?' ' : moderatedBy}`}/>}

                    {!course && bootcamp && <P1 className="bootcamps-type" value={'bootcamp'} />}
                    {course && <P1 className="bootcamps-type" value={'Weekly Event'} />}

                    <H2 value={title}/>

                    {bootcamp && <P1 className="bootcamps-subtitle bold" value={subTitle || ''} />}
                    {!course && bootcamp && <p className="p1 bootcamps-time-line bold">{bootcampName} <span>{timeLine}</span></p>}

                    {!bootcamp && !event && location &&
                    <P1 className={`location ${horizontal && address ? 'gray' : ''}`} value={location}/>}
                    {!bootcamp && !event && horizontal && address && (
                        <P1 className="address gray" value={address}/>
                    )
                    }
                    <P1 className="description" value={description || ''}/>
                    {
                        event || course && <P1 className="timeline" value={timeLine || ''}/>
                    }

                    {!bootcamp && !event && lenghts ? <P3 value={lenghts}/>
                        : (
                            !bootcamp && !event && horizontal ?
                                (
                                    <Button
                                        value='Learn more'
                                        size="medium"
                                        className='button__bright btn-collective'
                                        type="primary"
                                        onClick={onClick}
                                    />
                                )
                                :
                                (
                                    !bootcamp && !event && onClick && (
                                        <div onClick={onClick} className="read-more">
                                            Learn More
                                        </div>
                                    )
                                )
                        )
                    }
                    {
                        !bootcamp &&
                        (
                            <div className="btn-event-wrapper">
                                {
                                    registered ?
                                        <Button
                                            value="Start Bootcamp"
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
                                        {registered && <P1 value="You are registered for this event."/>}
                                    </>
                                }

                            </div>
                        )
                    }
                </div>
            </div>
            {event && <Paragraph className="events-card-description" value="Cover up sun nasa king vymaanika electromagnetic sanskrit ufo magnetic current vimana ufo star. Earth mound star mayan know ufo mutation crystal worm hole targeted astronaut. Know mayan disc puma mahabharata weightless time sightings golden interdimensional technology times i know. Worm hole theorists contend mainstream vimana otherworldly nazca lines sumerian. Kachina civilization clearly gates extraterrestrial electromagnetic ancient puma choral." />}
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

