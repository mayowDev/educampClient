import React from 'react';
import {ISpinnerProps} from "./type";
import LogoURL from '../../assets/images/Spinner-200px.gif';
import BrightLogo from '../../assets/images/Spinner-200px.gif';

const Spinner: React.FC<ISpinnerProps> = ({ bright, className }) => {
    return (
        <div className={`spinner-container ${bright ? 'bright' : ''} ${className || ''}`}>
            <img style={{width: '350%', height: '350px'}} src={!bright ? LogoURL : BrightLogo} className="anime-loader" />
        </div>
    )
}
export default Spinner;
