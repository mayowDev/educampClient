import React from 'react';
import Spinner from '../Spinner';
import { ILoadingPageProps } from './types';

const LoadingPage:React.FC<ILoadingPageProps> = ({ fadeUp }) => {
    return (
        <div className="loading-page">
            <Spinner bright className={`${fadeUp ? 'move-up' : ''}`} />
        </div>
    )
};

export default LoadingPage;
