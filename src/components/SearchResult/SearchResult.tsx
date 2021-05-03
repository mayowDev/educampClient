import React from 'react';
import {Paragraph} from '../Typography';
import {Link} from 'react-router-dom';
import './style.scss';
import {ISearchResult} from './types';
import ImageLoader from "../ImageLoader";

const SearchResult: React.FC<ISearchResult> = ({imgSrc, isDisabled, title, subtitle, description, id, type}) => {
    const link = () => {
        if(!isDisabled) {
            return `${type}/${id}`;
        }
    }
    return (
            <div className="borderBottom ">
                <Link to={link()} className="search-result container">
                    <div className="img">
                        {/*// @ts-ignore*/}
                        <ImageLoader imgUrls={imgSrc && Array.isArray(imgSrc) ? [...imgSrc] : [imgSrc]}/>
                        {/*<img src={imgSrc}/>*/}
                    </div>
                    <div className="searchDetails">
                        {/*<P2 className="searchTitle" value={title}/>*/}
                        <Paragraph className="searchTitle" value={title || ''} />
                        <Paragraph className="gray searchSubtiltle" value={subtitle  || ''} />
                        <Paragraph className="searchDescription" value={description  || ''} />
                        {/*<P2 className="searchSubtiltle" value={subtitle}/>*/}
                        {/*<P2 className="searchDescription" value={description}/>*/}
                    </div>
                </Link>
            </div>
    )
};

export default SearchResult;
