import React from 'react';
import {Paragraph} from '../Typography';
import {Link} from 'react-router-dom';
import './style.scss';
import {ISearchResult} from './types';

const SearchResult: React.FC<ISearchResult> = ({onClick, title, id}) => {
    return (
            <Link onClick={onClick} key={id} to='#' className="search-link">
                <Paragraph className="searchTitle" value={title || ''} />
            </Link>
    )
};

export default SearchResult;
