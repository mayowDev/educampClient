import React, {Fragment, useEffect, useState} from 'react'
import Card from '../../components/Card'
import {useHistory} from "react-router-dom";

const Favourites = (props) => {
    const history = useHistory();
    // const [favourites, setFavorites] = useState<any>(null);
    const { favouriteItems, getWishlistItems, isLoading, toggleFavouriteExhibition} = props;

    // const isFavouritesEmpty = () => {
    //     return favouriteItems&&favouriteItems.length === 0;
    // };

    useEffect(() => {
        getWishlistItems();
    }, []);

    return (
        <>
            <div className='favourites-wrapper'>
                {
                //    isFavouritesEmpty() && 
                    <Fragment>
                        {
                            favouriteItems&&favouriteItems.map((data) => {
                                console.log('data', data.slug);
                                return <Card
                                    imgSrc={data.image && [data.image.data.signedUrl1024x1024, data.image.data.signedUrl1024x1024Webp]}
                                    title={data.title}
                                    description={data.description}
                                    horizontal
                                    onClick={() => history.push(`/courses/${data.slug}`)}
                                />
                            })
                        }
                    </Fragment>
                }
            </div>
        </>
    )
}

export default Favourites
