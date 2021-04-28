import React, {Fragment, useEffect, useState} from 'react'
import Card from '../../components/Card'
import {H1, P1} from '../../components/Typography'
// import Dropdown from '../../components/Dropdown'
import {useHistory} from "react-router";
import Spinner from "../../components/Spinner";
import Course from "../../components/Course";
import {favouriteCourse} from "../../service";
import {getIdFromSlug} from "../../utils";

const Favourites = (props) => {
    const history = useHistory();
    const [favouriteID, setFavoriteId] = useState(null);
    const {favourite, updateFavourite, favourite: {favourites, favouritesLoading, isFavouritesUpdated}, fetchFavourites, toggleFavouriteExhibition} = props;

    const isFavouritesEmpty = () => {
        return favourites.organisations.length === 0 && favourites.artists.length === 0 && favourites.exhibitions.length === 0 && favourites.artworks.length === 0;
    };

    useEffect(() => {
        if (isFavouritesEmpty() || isFavouritesUpdated) {
            loadData();
        }
    }, []);

    const loadData = async () => {
        await fetchFavourites();
    };

    const toggleFavourite = async (id) => {
        const resp = await favouriteCourse(id);
        if (resp.data) {
            toggleFavouriteExhibition(id, resp.data.isFavourite);
            props.updateDataInFavourite('exhibitions', id, resp.data.isFavourite);
            console.log('resp :  ', resp);
        }
    };

    const handleGalleryClick = (galleryId) => {
        history.push(`/galleries/${galleryId}`)
    };

    const handleArtistClick = (artistId) => {
        history.push(`/artists/${artistId}`)
    };

    const handleExhibitionClick = (exhibitionId) => {
        history.push(`/exhibitions/${exhibitionId}`);
    };

    useEffect(() => {
        console.log('favourites all : ', favourites && favourites)
    }, [favourites]);

    return (
        <>
            <div className='exhibitions-wrapper galleries-wrapper container favourites-wrapper'>
                <div className='flex'>
                    {/*:TODO--dropdown*/}
                    {/*<Dropdown options={[*/}
                    {/*    {value: "alphabetical", label: "Alphabetical"},*/}
                    {/*    {value: "numerical", label: "Numerical"}*/}
                    {/*]} selected='Alphabetical'*/}
                    {/*          onChange={(val) => console.log(val)}/>*/}
                </div>
                {
                    favouritesLoading ?
                        <Spinner/>
                        :
                        isFavouritesEmpty() ?
                            <P1 className="address gray" value={'No favourites.'}/>
                            :
                            <Fragment>
                                {
                                    favourites.artists.map(({data}) => {
                                        return <Card
                                            imgSrc={data.image && [data.image.data.signedUrl1024x1024, data.image.data.signedUrl1024x1024Webp]}
                                            title={data.name}
                                            description={data.description}
                                            horizontal
                                            onClick={() => handleArtistClick(data.id)}
                                        />
                                    })
                                }
                                <div className="cards-container">
                                    <div>
                                {
                                    favourites.exhibitions.map(({data}) => {
                                        return <Course
                                            id={data.id}
                                            exhibitionImg={data.image && [data.image.data.signedUrl1920x1080, data.image.data.signedUrl1920x1080Webp]}
                                            // exhibitionImg={data.image && data.image.data.signedUrl1920x1080Webp}
                                            title={data.name}
                                            onClick={handleExhibitionClick}
                                            subTitle={data.organisation && data.organisation.data.overview}
                                            galleryName={data.organisation && data.organisation.data.name}
                                            locations={data.organisation && data.organisation.data.locations}
                                            startedAt={data.startedAt}
                                            endedAt={data.endedAt}
                                            toggleFavourite={(id) => toggleFavourite(id)}
                                            isFavourite={data.isFavourite}
                                        />
                                    })
                                }
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                {
                                    favourites.organisations.map(({data}) => {
                                        return <Card
                                            imgSrc={data.image && [data.image.data.signedUrl1024x1024, data.image.data.signedUrl1024x1024Webp]}
                                            title={data.name}
                                            description={data.overview}
                                            location={data.locations}
                                            horizontal
                                            onClick={() => handleGalleryClick(data.id)}
                                        />
                                    })
                                }
                                <br/>
                            </Fragment>
                }
            </div>
        </>
    )
}

export default Favourites
