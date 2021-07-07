import React from 'react';
import {Paragraph} from '../Typography';
import {Link, useHistory} from 'react-router-dom';
import './style.scss';
import {ISearchResult} from './types';

const SearchResult: React.FC<ISearchResult> = ({ title, id, url}) => {
    // const history = useHistory()
    return (
            <Link key={id} to={url} className="search-link">
                <Paragraph className="searchTitle" value={title || ''} />
            </Link>
    )
};

export default SearchResult;
