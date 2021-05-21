import React from 'react';
import {ISpinnerProps} from "./type";
import spinner from '../../assets/images/loading.gif';
// import SpiningGif from '../../assets/images/Spinner-200px.gif';

const Spinner: React.FC<ISpinnerProps> = ({ bright, className }) => {
    return (
        <div className={`spinner-container ${bright ? 'bright' : ''} ${className || ''}`}>
            <img style={{width: '350%', height: '350px'}} src={spinner} className="anime-loader" />
        </div>
    )
}
export default Spinner;
