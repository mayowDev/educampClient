import React, { useState } from 'react';
import {H2, P1, P3, SubTitle} from '../Typography';
import {Paragraph} from '../Typography2';
import {ICardProps} from './types';
import './style.scss';
import IconBtn from "../IconBtn";
import Button from "../Button";
import ImageLoader from "../ImageLoader";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Card: React.FC<ICardProps> = ({style, curateSidebar, galleryName, subTitle, exhibition, isLive, event, imgSrc, title, location, description, onClick, horizontal, address, lenghts, moderatedBy, timeLine, handleRegister, handleUnRegister, noBorder, registered, className, defaultEvent, noFade}) => {

    const [isdisable, handleDisale] = useState(false);
    const [isInfo, handleInfo] = useState(false);

    const RenderContent = () => (
        <>
            <div
                className={`card ${horizontal ? '' : 'card--horizontal'} ${event ? 'card--event' : ''} ${noBorder ? 'no-border' : ''} ${className || ''} ${exhibition ? 'card--exhibition' : ''} ${defaultEvent ? 'card--default-event' : ''}`}
                onClick={!isdisable ? (isLive ? onClick : event ? () => {} : onClick) : () => {console.log('click disabled')}} style={style || null}
                >

                <div className={`img ${address ? 'address' : ''}`}>
                    <ImageLoader imgUrls={Array.isArray(imgSrc) ? [...imgSrc] : [imgSrc]}/>
                </div>

                <div className={`${event || exhibition ? 'right' : ''}`}>
                    {event && <SubTitle className="moderate" value={`Moderated By: ${ moderatedBy===undefined?' ' : moderatedBy}`}/>}

                    {!defaultEvent && exhibition && <P1 className="exhibitions-type" value={'Exhibition'} />}
                    {defaultEvent && <P1 className="exhibitions-type" value={'Weekly Event'} />}

                    <H2 value={title}/>

                    {exhibition && <P1 className="exhibitions-subtitle bold" value={subTitle} />}
                    {!defaultEvent && exhibition && <p className="p1 exhibitions-time-line bold">{galleryName} <span>{timeLine}</span></p>}

                    {!exhibition && !event && location &&
                    <P1 className={`location ${horizontal && address ? 'gray' : ''}`} value={location}/>}
                    {!exhibition && !event && horizontal && address && (
                        <P1 className="address gray" value={address}/>
                    )
                    }
                    <P1 className="description" value={description}/>
                    {
                        event || defaultEvent && <P1 className="timeline" value={timeLine}/>
                    }

                    {!exhibition && !event && lenghts ? <P3 value={lenghts}/>
                        : (
                            !exhibition && !event && horizontal ?
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
                                    !exhibition && !event && onClick && (
                                        <div onClick={onClick} className="read-more">
                                            Learn More
                                        </div>
                                    )
                                )
                        )
                    }
                    {
                        !exhibition && event &&
                        (
                            <div className="btn-event-wrapper">
                                {
                                    isLive ?
                                        <Button
                                            value="Enter Event"
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
                                {curateSidebar&& <div onMouseEnter={(e) => {e.stopPropagation(); handleDisale(true);}}  onMouseLeave={(e) => {e.stopPropagation(); handleDisale(false); }}><IconBtn type="info" onClick={(e) => {e.stopPropagation(); handleInfo(!isInfo); }} /></div>
                               }

                            </div>
                        )
                    }
                </div>
            </div>
            {event && isInfo && <Paragraph className="events-card-description" value="Cover up sun nasa king vymaanika electromagnetic sanskrit ufo magnetic current vimana ufo star. Earth mound star mayan know ufo mutation crystal worm hole targeted astronaut. Know mayan disc puma mahabharata weightless time sightings golden interdimensional technology times i know. Worm hole theorists contend mainstream vimana otherworldly nazca lines sumerian. Kachina civilization clearly gates extraterrestrial electromagnetic ancient puma choral." />}
        </>
    );

    return (
        <>
            {
                defaultEvent || noFade ? (
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

