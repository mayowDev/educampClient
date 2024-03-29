import React, {useEffect, useState, memo} from 'react';
import LogoURL from '../../assets/images/loading.gif';
import {ImageLoaderProps} from './types';
import Loader from '../Spinner';
import {isEqual} from 'lodash';

const ImageLoader: React.FC<ImageLoaderProps> = memo(({imgUrls, isOverlayed, onClick, style}) => {
    const [imgSrc, setImgSrc] = useState(LogoURL);

    const [localImgUrl, setLocalImageUrls] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const localImgUrlRef = React.useRef(localImgUrl);
    useEffect(() => {

        localImgUrlRef.current.length <= 0 && loadImage();
        return () => console.log("Unmounting---------")
    }, []);
    useEffect(() => {
        localImgUrlRef.current = localImgUrl;
    },[localImgUrl])
    useEffect(() => {
        if(!isEqual(localImgUrl, imgUrls) && localImgUrl.length <= 0)
        return
    },[localImgUrl,setLocalImageUrls,imgSrc])
    useEffect(() => {
        // isEqual(imgUrls);

        // localImgUrl.length <= 0 && loadImage();
        console.log("imageLoader called ",isLoading);
    }, [isLoading]);
    // const onImageLoad =;
    const loadImage = async () => {
        if(imgSrc)
        // @ts-ignore
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
            // @ts-ignore
        })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
        // @ts-ignore
        // Check if browser use the 2nd image in array that is not a webp image.
        if (isSafari && imgUrls[1]) {
            setImgSrc(imgUrls[1]);
            return;
        }
        imgUrls && imgUrls[0] && setImgSrc(imgUrls[0]);
    };

    // console.log('imgUrls = ', imgSrc, imgUrls)
    return (
        <div className={isLoading ? "image-loader-container image-loading" : "image-loader"} style={style ? style : {}}>

            <img width={540} onLoad={ () => setLoading(false)} height={721} onClick={onClick && onClick} src={imgSrc} className={`${isLoading ? " actual-image anime-loader" : " actual-image"} `}/>

            {
                isLoading && <Loader />
            }
        </div>
    )
})

export default React.memo(ImageLoader);
