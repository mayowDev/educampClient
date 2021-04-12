import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import Card from "../../components/Card";
import {H1} from '../../components/Typography'
import Spinner from '../../components/Spinner';
// import Dropdown from "../../components/Dropdown";

import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';

const Courses = (props) => {
    const history = useHistory()
    const {updateSortBy, resetCourses, setCoursesLoader, fetchCourses, collectiveMeta, gallery: {courses, sortBy, currentPage, canLoadMore, coursesLoading}, course, globalProps} = props;
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    useEffect(() => {
        
        loadData();
        loadCourses()
        return () => {
            resetCourses();
        }
    }, []);


    const loadCourses = () => {
        if (collectiveMeta && collectiveMeta.length === 0) {
            fetchCourses();
        }
    }

    useEffect(() => {
        setIsLoadingMore(false)
    }, [courses && courses.length])

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

    const handleGalleryClick = (galleryId) => {
        history.push(`/galleries/${galleryId}`)
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
            <div className="courses-wrapper container">
                <div className="flex">
                    <H1 className='big' value='Courses'/>
                    {/*:TODO--dropdown*/}
                    {/*<Dropdown options={filterOptions()} selected={sortBy} onChange={(val) => handleValueChange(val)} />*/}
                </div>
                {
                    coursesLoading ?
                        <Spinner type="cover" />
                        :
                        // @ts-ignore
                        <div className="cards-container courses-cards" ref={infiniteRef}>
                            {
                                courses && courses.map((course: any) => {
                                    console.log('courses.tsx',course)
                                    const {id,  title, weeks, tuition, minimumSkill,scholarshipAvailable, published, image, locations, description} = course.data;
                                    
                                    const imageUrl = image && image.data && image.data.signedUrl300x600 && image.data.signedUrl300x600.replace('/300_', '/720_');
                                    return (
                                        <div data-aos="fade-up" data-aos-duration="500">
                                            <Card imgSrc={image && image.data && [imageUrl, imageUrl]} title={title}
                                                description={description}
                                                location={locations.toLowerCase()}
                                                horizontal
                                                onClick={() => handleGalleryClick(id)}
                                            />
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

export default Courses;
