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
    
    const {  fetchBootcamps,  bootcamps:{bootcamps, bootcampsLoading}} = props;
    // const [isLoadingMore, setIsLoadingMore] = useState(false);
    console.log('props.bootcamps', bootcamps);//empty
    useEffect(() => {
        
        fetchBootcamps();
        // return () => {
        //     resetBootcamps();
        // }
    }, []);


    // const loadBootcamps = () => {
    //     if (bootcamps && bootcamps.length === 0) {
    //         fetchBootcamps();
    //     }
    //     console.log('bootcamps.tsx', props.bootcamps);//empty
    //     console.log('Bootcamps props', props.fetchBootcamps());//promise pending

    // }

    // useEffect(() => {
    //     setIsLoadingMore(false)
    // }, [bootcamps && bootcamps.length])

    // const loadData = async () => {
        // if (canLoadMore && !isLoadingMore) {
            // setIsLoadingMore(true);
            // const nextPage = currentPage + 1;
            // const isGroup = !['alphabetical', ].includes(sortBy);
            // await props.fetchGalleriesInit( nextPage, sortBy, isGroup,"gallery");
        // }
        // else{
            // const isGroup = !['alphabetical', ].includes(sortBy);
            // await props.fetchGalleriesInit( 1, sortBy, isGroup,"gallery");
        // }
    // };

    // const handleBootcampClick = (bootcampId:string) => {
    //     history.push(`/bootcamps/${bootcampId}`)
    // };



    // const handleValueChange = async (value) => {
    //     setCoursesLoader(true)
    //     // updateSortBy(value);
    //     const isGroup = !['alphabetical', ].includes(value);
    //     await props.fetchGalleriesInit( 1, value, isGroup, "gallery");
    // }

    // const infiniteRef = useInfiniteScroll({
    //     loading: isLoadingMore,
    //     hasNextPage: canLoadMore,
    //     onLoadMore: loadData,
    // });

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
                        <Spinner />
                        :
                        // @ts-ignore
                        <div className="cards-container bootcamps-cards" >
                            {
                                bootcamps && bootcamps.map((bootcamp: any) => {
                                    console.log('each bootcamp',bootcamp)                                    
                                    return (
                                        <div data-aos="fade-up" data-aos-duration="500">
                                            {bootcamp.slug}
                                            {/* <BootcampDetails  onClick={() => handleBootcampClick(bootcamp.id)} {...bootcamp}/> */}
                                        </div>
                                    )
                                })
                            }
                        </div>

                }
            </div>
        </ScrollAnimation>
    )
};

export default Bootcamps;
