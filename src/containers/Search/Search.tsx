import React, {Fragment, useEffect, useState} from 'react';
// import InfiniteScroll from 'react-infinite-scroller';
import Spinner from "../../components/Spinner";
import {H1, P1, P2, Title2} from '../../components/Typography';

import SearchResult from "../../components/SearchResult";
// import Dropdown from "../../components/Dropdown"
import SearchIcon from "../../assets/icons/search.svg"
import useInfiniteScroll from "react-infinite-scroll-hook";

const Search = ({resetInput, searchQuery, resetSearchRecords, fetchSearchInit, recordsLoading, currentPage, records, canLoadMore, changeSearch, recentSearch, setRecentSearch}) => {
    const [isloadingMore, setIsLoadingMore] = useState(false);
    const [currentVal, setCurrentVal] = useState('');

    useEffect(() => {
        console.log('currentVal => ', currentVal);
    }, [currentVal])

    useEffect(() => {
        setIsLoadingMore(false)
        resetSearchRecords();
        // loadSearch(0, false, true);
        // console.log('searchQuery -> ', searchQuery)
        if(searchQuery){
            setRecentSearch(searchQuery);
        }
    }, [searchQuery]);

    useEffect(() => {
        if(recentSearch){
            handleSearchChange(searchQuery);
        }
        console.log('recentSearch on recentSearch change => ', recentSearch);
    }, [recentSearch]);

    const handleSearchChange = (value) => {
        changeSearch(value);
    };

    useEffect(() => {
        console.log('recentSearch searchQuery onMount => ', searchQuery);
        if(searchQuery === "" && recentSearch){
            handleSearchChange(recentSearch);
        }
        return () => {
            console.log('recentSearch searchQuery Unmount => ', searchQuery);
            resetInput();
            resetSearchRecords();
        }
    }, [])

    useEffect(() => {
        setIsLoadingMore(false)
    }, [records.galleries.data.length, records.exhibitions.data.length, records.collectives.data.length, records.artists.data.length])

    const loadSearch = (_currentPage, loadingMore, _canLoadMore) => {
        // console.log('searchQuery.length > 2 && !isloadingMore && _canLoadMore = ', searchQuery.length > 2 , !isloadingMore , _canLoadMore)
        if (searchQuery.length > 2 && !isloadingMore && _canLoadMore) {
            setIsLoadingMore(true)
            const nextPage = _currentPage + 1;
            fetchSearchInit(searchQuery, nextPage, loadingMore)
        }
    };

    const getResultsLength = () => {
        return records.galleries.data.length + records.exhibitions.data.length + records.collectives.data.length + records.artists.data.length;
    }

    const infiniteRef = useInfiniteScroll({
        loading: isloadingMore,
        hasNextPage: canLoadMore,
        onLoadMore: () => loadSearch(currentPage, isloadingMore, canLoadMore),
        // scrollContainer,
    });

    // console.log('isloadingMore = ', isloadingMore)
    return (
        <div className="card-wrapper">

            <label className="search_bar">
                <input value={searchQuery} onChange={(e) => {
                    setCurrentVal(e.target.value);
                    // handleSearchChange(e.target.value)
                }} type="text" placeholder="Search artists, artwork, galleries, exhibitions" />
                <div className="icon">
                    <img src={SearchIcon} alt="Search" />
                </div>
            </label>
            {
                !searchQuery || searchQuery.length < 3 ?
                    <div>
                        <P1 className="align-center" value={`Nothing to search.`}/>
                    </div>
                    :
                    getResultsLength() === 0 && !recordsLoading ?
                        <div>
                            <P1 className="align-center" value={`No records found.`}/>
                        </div>
                    :
                    <Fragment>
                        <div className=" ">
                            <div className="search-wrapper borderBottom ">
                                <div className="searh-head container">
                                    <Title2 value={`Showing ${getResultsLength()} results for '${searchQuery}'`} />
                                </div>
                            </div>
                        </div>
                        <div className="card-description">
                            {/*@ts-ignore*/}
                            <div ref={infiniteRef} className="">
                                {
                                        records.galleries.data.map(record => {
                                            return (
                                                <SearchResult
                                                    imgSrc={record.data.image && [record.data.image.data.signedUrl300x600Webp, record.data.image.data.signedUrl300x600]}
                                                    title={record.data.name}
                                                    subtitle={record.data.locations}
                                                    description={record.data.overview}
                                                    id={record.data.id}
                                                    type="galleries"
                                                />)
                                        })
                                    }
                                    {
                                        records.artists.data.map(record => {
                                            return (
                                                <SearchResult
                                                    imgSrc={record.data.image && [record.data.image.data.signedUrl300x600Webp, record.data.image.data.signedUrl300x600, record.data.image.data.signedUrl]}
                                                    title={record.data.name}
                                                    subtitle={record.data.organisation.data.name}
                                                    description={record.data.description}
                                                    id={record.data.id}
                                                    type="artists"
                                                />)
                                        })
                                    }
                                    {
                                        records.collectives.data.map(record => {
                                            return (
                                                <SearchResult
                                                    imgSrc={record.data.image && [record.data.image.data.signedUrl300x600Webp, record.data.image.data.signedUrl300x600, record.data.image.data.signedUrl]}
                                                    title={record.data.name}
                                                    subtitle={record.data.shortDescription}
                                                    description={record.data.description}
                                                    id={record.data.id}
                                                    type="collectives"
                                                />)
                                        })
                                    }
                                    {
                                        records.exhibitions.data.map(record => {
                                            return (
                                                <SearchResult
                                                    imgSrc={record.data.image && [record.data.image.data.signedUrl300x600Webp, record.data.image.data.signedUrl300x600, record.data.image.data.signedUrl]}
                                                    title={record.data.name}
                                                    subtitle={(record.data.organisation && record.data.organisation.data.name)}
                                                    description={record.data.description}
                                                    id={record.data.id}
                                                    type="exhibitions"
                                                />)
                                        })
                                    }
                                {
                                    isloadingMore &&
                                    <Spinner/>
                                }
                            </div>
                        </div>
                    </Fragment>
            }
        </div>
    )
};
export default Search;
