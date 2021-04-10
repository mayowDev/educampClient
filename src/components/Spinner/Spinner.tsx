import React from 'react';
import {ISpinnerProps} from "./type";
import LogoURL from '../../assets/images/Logo.png';
import BrightLogo from '../../assets/images/bright-logo.png';

const Spinner: React.FC<ISpinnerProps> = ({ bright, className }) => {
    return (
        <div className={`spinner-container ${bright ? 'bright' : ''} ${className || ''}`}>
            <img src={!bright ? LogoURL : BrightLogo} className="anime-loader" />
        </div>
    )
}
export default Spinner;
