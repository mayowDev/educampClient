import React, {Fragment, useEffect, useState} from 'react';
import {useHistory, Link} from "react-router-dom"
import { P1, P2, Title, Title2} from '../../components/Typography';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import Rating from '../../components/Rating'

import sampleImage from '../../assets/images/coursesThumbnails/react-thumbnail.jpg';

const Favourites = (props) => {
    const history = useHistory();
    // const [favourites, setFavorites] = useState<any>(null);
    const { favouriteItems, getWishlistItems, toggleFavouriteExhibition} = props;
    const [activeTab, setActiveTab] = useState('favourites');

    // const isFavouritesEmpty = () => {
    //     return favouriteItems&&favouriteItems.length === 0;
    // };

    useEffect(() => {
        getWishlistItems();
    }, []);

    return (
        <>
            <div className="favourites">
                <Fragment>
                    <div className="favourites__header">
                        <h2>My Learning</h2>
                        <div className="favourites__header--tabs">
                            <ul >
                                <li onClick={() => setActiveTab("courses")} className={`${activeTab === "courses" ? 'active-link':''}`}>All Courses</li>
                                <li onClick={() => setActiveTab("favourites")} className={`${activeTab === "favourites" ? 'active-link':''}`}>My Wishlist</li>
                                <li onClick={() => setActiveTab("collections")} className={`${activeTab === "collections" ? 'active-link':''}`}>Collections</li>
                                <li onClick={() => setActiveTab("archives")} className={`${activeTab === "archives" ? 'active-link':''}`}>Archived</li>
                            </ul>
                        </div>
                    </div>
                    <ScrollAnimation>
                    <div className="favourites__items" >
                        {activeTab ==='courses'&&
                            <div onClick={() => history.push(`/courses`)} className="favourites__items--item">
                                <img src={sampleImage} alt="course-img" />
                                <Title2 value={'MERN Stack Front To Back: Full Stack React & Node.Js With MongoDB'} />
                                <h4>{'Brad Traversy'}</h4>
                                <div className="price-reviews">
                                    <Rating/>
                                    <h3>$89.99</h3>
                                </div>
                            </div>  
                        }
                        {activeTab === "favourites" && favouriteItems&&favouriteItems.map((data) => {
                                return(
                                    <div key={data.id} onClick={() => history.push(`/courses/${data.slug}`)} className="favourites__items--item">
                                        <img src={sampleImage} alt="course-img" />
                                        <Title2 value={data.title} />
                                        <h4>{data.createdBy}</h4>
                                        <div className="price-reviews">
                                            <Rating/>
                                            <h3>{data.price == 0 ? 'Free' : `$${data.price}.99`}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {activeTab === 'collections'&&
                            <div className="favourites__items--collections">
                                <h3>Organize and access your courses faster!</h3>
                                {/* <h3></h3> */}
                                <span><Link to="#" onClick={() =>setActiveTab("courses")}>Go to the All Courses tab</Link> to create a collection.</span>
                            </div> 
                        }
                        { activeTab === "archives" &&
                            <div onClick={() => history.push(`/courses`)} className="favourites__items--item">
                                <img src={sampleImage} alt="course-img" />
                                <Title2 value={'MERN Stack Front To Back: Full Stack React & Node.Js With MongoDB'} />
                                <h4>{'Brad Traversy'}</h4>
                                <div className="price-reviews">
                                    <Rating/>
                                    <h3>$89.99</h3>
                                </div>
                            </div>
                        }
                    </div>
                    </ScrollAnimation>
                    
                </Fragment>
            </div>
        </>
    )
}

export default Favourites
