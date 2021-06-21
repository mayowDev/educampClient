import React, {Fragment, useEffect, useState} from 'react';
import {useHistory, Link} from "react-router-dom"
import { P1, P2, Title, Title2} from '../../components/Typography';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import Rating from '../../components/Rating'

import sampleImage from '../../assets/images/coursesThumbnails/react-thumbnail.jpg';

const Favourites = (props) => {
    const history = useHistory();
    // const [favourites, setFavorites] = useState<any>(null);
    const { favouriteItems, getWishlistItems, isLoading, toggleFavouriteExhibition} = props;
    const [activeTab, setActiveTab] = useState('details');

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
                            <ul className={`nav-links ${activeTab === "courses" && 'nav-links-favourites'}`}>
                                <li onClick={() => setActiveTab("courses")}>All Courses</li>
                                <li onClick={() => setActiveTab("favourites")}>My Wishlist</li>
                                <li onClick={() => setActiveTab("collections")}>Collections</li>
                                <li onClick={() => setActiveTab("payments")}>Archived</li>
                            </ul>
                        </div>
                    </div>
                    <ScrollAnimation>
                    <div className="favourites__items" >
                    {favouriteItems&&favouriteItems.map((data) => {
                            return(
                                <div key={data.id} onClick={() => history.push(`/courses/${data.slug}`)} className="favourites__items--item">
                                    <img src={sampleImage} alt="course-img" />
                                    <Title2 value={data.title} />
                                    <h4>{data.createdBy}</h4>
                                    <div className="price-reviews">
                                        <Rating/>
                                        <h3>$89.99</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    </ScrollAnimation>
                    
                </Fragment>
            </div>
        </>
    )
}

export default Favourites
