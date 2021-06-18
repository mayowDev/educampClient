import React, { useState, useEffect } from 'react';
import IconBtn from "../IconBtn";
import Twitter from '../../assets/icons/twitter.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Chain from '../../assets/icons/chain.svg';
import {FacebookShareButton, TwitterShareButton} from "react-share";
import {IShareBtnProps} from './types';
// import { isMobileDevice } from '../../utils';

const ShareBtn:React.FC<IShareBtnProps> = ({ shareUrl, up }) => {
    const [isCopied, setIsCopied] = useState(false);
    // const [isHide, setIsHide] = useState(true);
    const [copiedText, setCopiedText] = useState('');

    useEffect(() => {
        if(copiedText !== ''){
            navigator && navigator.clipboard && navigator.clipboard.writeText(copiedText || '');
        }

    }, [copiedText]);

    return (
        <div onClick={()=>{
            // console.log("isMobileDevice",isMobileDevice())
            // if (isMobileDevice()){
            //     setIsHide(false)
            //     setTimeout(
            //         () =>  setIsHide(true),
            //         5000
            //     );
            // }
        }} className={`share-btn  ${up ? 'share-btn--up' : ''}`}>
            <IconBtn type="share2" />
            <div className={`tooltip`}>
                <TwitterShareButton
                    url={shareUrl}
                    //  @ts-ignore
                    quote={shareUrl}
                    className="share-icons"
                >
                    <img alt='twitter' src={Twitter} />
                </TwitterShareButton>
                <FacebookShareButton
                    url={shareUrl}
                    quote={shareUrl}
                    className="share-icons"
                >
                    <img alt='facebook' src={Facebook} />
                </FacebookShareButton>
                <button className="share-btn share-icons copy-icon" onMouseLeave={() => setCopiedText('')}>
                    <img alt='chain' src={Chain} onClick={() => {
                        setCopiedText(window.location.href)
                        setIsCopied(true)
                        setTimeout(
                            () =>  setIsCopied(false),
                            2000
                        );

                    }}  />
                    <div className={`tooltip ${copiedText === window.location.href &&isCopied? 'active' : ''}`}>
                        Link Copied!
                    </div>
                </button>
            </div>
        </div>
    )
};

export default ShareBtn;
