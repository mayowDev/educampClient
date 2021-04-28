import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import Card from "../../components/Card";
import {H1} from '../../components/Typography'
import Spinner from '../../components/Spinner';
// import Dropdown from "../../components/Dropdown";
import BootcampDetails from "./Details"
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';

const Bootcamps = (props) => {
    const history = useHistory()
    const {updateSortBy, resetBootcamps, setCoursesLoader, fetchBootcamps , state: {sortBy, currentPage, canLoadMore, bootcampsLoading}, bootcamps} = props;
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    useEffect(() => {
        
        loadData();
        loadBootcamps()
        return () => {
            resetBootcamps();
        }
    }, []);


    const loadBootcamps = () => {
        if (bootcamps && bootcamps.length === 0) {
            fetchBootcamps();
        }
    }

    useEffect(() => {
        setIsLoadingMore(false)
    }, [bootcamps && bootcamps.length])

    const loadData = async () => {
        if (canLoadMore && !isLoadingMore) {
            setIsLoadingMore(true);
            const nextPage = currentPage + 1;
            const isGroup = !['alphabetical', ].includes(sortBy);
            await props.fetchGalleriesInit( nextPage, sortBy, isGroup,"gallery");
        }
        else{
            const isGroup = !['alphabetical', ].includes(sortBy);
            await props.fetchGalleriesInit( 1, sortBy, isGroup,"gallery");
        }
    };

    const handleBootcampClick = (bootcampId:string) => {
        history.push(`/bootcamps/${bootcampId}`)
    };



    const handleValueChange = async (value) => {
        setCoursesLoader(true)
        updateSortBy(value);
        const isGroup = !['alphabetical', ].includes(value);
        await props.fetchGalleriesInit( 1, value, isGroup, "gallery");
    }

    const infiniteRef = useInfiniteScroll({
        loading: isLoadingMore,
        hasNextPage: canLoadMore,
        onLoadMore: loadData,
    });

    return (
        <ScrollAnimation>
            <div className="bootcamps-wrapper container">
                <div className="flex">
                    <H1 className='big' value='Bootcamps'/>
                    {/*:TODO--dropdown*/}
                    {/*<Dropdown options={filterOptions()} selected={sortBy} onChange={(val) => handleValueChange(val)} />*/}
                </div>
                {
                    bootcampsLoading ?
                        <Spinner type="cover" />
                        :
                        // @ts-ignore
                        <div className="cards-container bootcamps-cards" ref={infiniteRef}>
                            {
                                bootcamps && bootcamps.map((bootcamp: any) => {
                                    console.log('Bootcamp.tsx',bootcamp)                                    
                                    return (
                                        <div data-aos="fade-up" data-aos-duration="500">
                                            <BootcampDetails  onClick={() => handleBootcampClick(bootcamp.id)} {...bootcamp}/>
                                        </div>
                                    )
                                })
                            }
                            {
                                isLoadingMore &&
                                <Spinner/>
                            }
                        </div>

                }
            </div>
        </ScrollAnimation>
    )
};

export default Bootcamps;
