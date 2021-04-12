import {useInView} from "react-intersection-observer";
import React from "react";

const ScrollAnimation = (props) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        // rootMargin: "0px 0px 0px 0px",
        threshold: 0.0,
        // trackVisibility: true,
        delay : props.delay || 100
    });

    const delayTime = props.delay ? props.delay / 1000 : 0

    return (
        <div
            ref={ref}
            data-inview={inView}
            style={{
                width: '100%',
                animation: `${inView && delayTime ? `fadeUp ${delayTime}s ease forwards` : ''}`
                // position: "relative",
                // paddingBottom: `${(height / width) * 100}%`
            }}
            className={`${inView ? `${props.isExhibition ? 'fade-up exhibitions-card' : 'fade-up '}` : 'fade-out'}`}
        >
            {props.children}
        </div>
    )
}

export default ScrollAnimation;
