import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import Card from "../../components/Card";
import {H1} from '../../components/Typography'
import Spinner from '../../components/Spinner';
// import {paginate} from '../../utils/paginate'
// import Dropdown from "../../components/Dropdown";

import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';

const Courses = (props) => {
    const history = useHistory()
    const {   fetchCourses, data, data:{courses, canLoadMore, coursesLoading}} = props;
    console.log('data,', data);
    
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    useEffect(() => {
        fetchCourses()
    }, []);

    // useEffect(() => {
    //     setIsLoadingMore(false)
    // }, [courses && courses.length])

    const handleCourseClick = (courseId: number) => {
        history.push(`/courses/${courseId}`)
    };



    // const handleValueChange = async (value) => {
        // setCoursesLoader(true)
        // updateSortBy(value);
        // const isGroup = !['alphabetical', ].includes(value);
        // await props.fetchGallerie( 1, value, isGroup, "gallery");
    // }

    const infiniteRef = useInfiniteScroll({
        loading: isLoadingMore,
        hasNextPage: canLoadMore,
        onLoadMore: ()=>{console.log("loading infinite scroll")}
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
                                    const {id,  title, description, slug, duration, price, minimumskill,scholarshipavailable, published, image, courseContent} = course;                                    
                                    return (
                                        <div data-aos="fade-up" data-aos-duration="500">
                                            <Card imgSrc={image } title={title}
                                                description={description}
                                                horizontal
                                                onClick={() => handleCourseClick(id)}
                                                {...course}
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
