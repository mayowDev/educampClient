import React, {useEffect, useState} from 'react';
import Bootcamp from '../../components/Bootcamp'
import { withRouter } from "react-router-dom";
import Spinner from "../../components/Spinner";
import LoadingPage from '../../components/LoadingPage';
import useInfiniteScroll from "react-infinite-scroll-hook";
// import DetailsHeader from "../../components/DetailsHeader";
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation";

const LOGO_FADE_UP_DELAY = 2500; // This is for making loader visible for one second after the current exhibitions are loaded.
const MAIN_LOADER_TIME = 3300; // This is for making loader visible for one second after the current exhibitions are loaded.
const CURRENT_EXHIBITIONS_SCROLL_TIME = 5500; // This is the delay for scroll.


const Home = (props) => {
    const {exhibition: {exhibitions, currentPage, canLoadMore, exhibitionsLoading, exhibitionsFirstLoad}, globalProps, setFirstLoadGlobal} = props;
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [isTitleVisibile, setTitleVisibility] = useState(!localStorage.getItem('firstTime'));
    const [mockDelay, setmockDelay] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isTitle, setTitle] = useState(true);
    const [isFirstLoad, setIsFirstLoad] = useState(false);
    const [viewHeight, setViewHeight] = useState(0);

    useEffect(() => {
        if(exhibitionsFirstLoad === false){
            setTimeout(() => {
                setIsLoaded(true);
            }, LOGO_FADE_UP_DELAY);
            setTimeout(() => {
                setmockDelay(true);
            }, MAIN_LOADER_TIME);
            setTimeout(() => {
                scrollToExhibitions();
            }, CURRENT_EXHIBITIONS_SCROLL_TIME);
        }
    }, [exhibitionsFirstLoad]);

    useEffect(() => {
        const body = document.querySelector('.body-height');
        body && setViewHeight(body.clientHeight + 5);
        props.setViewHeight(body?.clientHeight);
    }, [])

    useEffect(() => {
        const localStorageVal = window.localStorage.getItem('isFirstLoad');
        if(localStorageVal === 'true'){
            // setIsLoaded(true);
            setmockDelay(true);
            setFirstLoadGlobal(true);
            setIsFirstLoad(true);
        }
        else {
            setIsFirstLoad(false);
            setFirstLoadGlobal(false);
        }
    }, []);

    useEffect(() => {
        console.log('isFirstLoad in home => ', isFirstLoad);
    }, [isFirstLoad]);

    const scrollToExhibitions = () => {
            setTitle(false);
            setTimeout(() => {
                localStorage.setItem('isFirstLoad', 'true')
            }, 1000);
    };

    useEffect(() => {
        if (exhibitions.length === 0) {
            loadData();
        }
    }, [exhibitions.length]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // returned function will be called on component unmount
        return () => {
            console.log('UN MOUNTING Exhibitions Listing')
            props.resetExhibitions()
        }
    }, []);

    useEffect(() => {
        setIsLoadingMore(false)
    }, [exhibitions.length]);

    const loadData = async () => {
        console.log('currentPage = ', currentPage)
        if (canLoadMore && !isLoadingMore) {
            setIsLoadingMore(true);
            const nextPage = currentPage + 1;
            await props.fetchExhibitions(nextPage);
        }
    };

    const handleExhibitionClick = (exhibitionId) => {
        props.history.push(`/exhibitions/${exhibitionId}`);
    }

    const infiniteRef = useInfiniteScroll({
        loading: isLoadingMore,
        hasNextPage: canLoadMore,
        onLoadMore: loadData,
    });

    return (
          mockDelay ? <div className={`home-full`}>
            {isFirstLoad === false && <div className='bg-black'  style={{transform: 'translateY(-18px)'}}>
                <ScrollAnimation>
                    <div className={`exhibitions-wrapper home-main ${!isTitle ? 'hide' : ''}`} id='home-title-wrapper' style={{ width: '100%', height:viewHeight }}>
                        {
                            //@ts-ignore
                            <div className={`${isTitleVisibile === false ? 'fades-up-title' : ''} title-wrapper home-main`} style={{ height: viewHeight }}>
                                <div>
                                    <h1 className={`title text-white`}>
                                        Welcome to Vortic.
                                        <span className="title--detailed">A new way to view, experience, and collect art.</span>
                                    </h1>
                                </div>
                            </div>
                        }
                    </div>
                </ScrollAnimation>
            </div>}
            {/*<div className="exhibitions-video">*/}
            {/*    /!*@ts-ignore*!/*/}
            {/*    <video src="https://vortic-static-content.s3.eu-west-2.amazonaws.com/VorticHomePlaceHolder.mp4" autoplay="true" muted/>*/}
            {/*</div>*/}

            {/*<div className="new-way">*/}
            {/*    <div className="exhibitions-wrapper">*/}
            {/*        <div >*/}
            {/*            <H1 className="dark" value="A new way to be with art." />*/}
            {/*        </div>*/}
            {/*        <div className="flex" >*/}
            {/*            <div>*/}
            {/*                <P1 value="Discover extraordinary art"/>*/}
            {/*                <P2 value="Discover the world’s leading galleries and experience exceptional art, wherever you are. Save and share your choice of pieces."/>*/}
            {/*                <P1 value="Explore and be inspired"/>*/}
            {/*                <P2 value="Enjoy curator-led tours, videos, and additional content to help you understand the inspiration behind the art you love."/>*/}
            {/*                <P1 value="Take your time, share the moment"/>*/}
            {/*                <P2 value="Spend time with extraordinary works. No crowds, no distractions, just you and the art."/>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <P1 value="View art in your own space"/>*/}
            {/*                <P2 value="View works of art in your own space as clearly as if they were physically in front of you. Use this to inform collecting decisions or simply to enjoy a world-leading artwork in your home through the magic of AR."/>*/}
            {/*                <P1 value="Enjoy Unique Access"/>*/}
            {/*                <P2 value="If you are a collector, you can receive personal invitations to private viewings, tailored exhibitions, curator-led tours, direct chat with gallery representatives, and gain further insight into the art you select."/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className='bg-white container '>
                <div className="exhibitions-wrapper home-exhibitions" style={{ paddingTop: '15px' }}>
                     <ScrollAnimation delay={400}>
                        {/* <DetailsHeader title="Current Exhibitions"/> */}
                        {
                            exhibitionsLoading ?
                                <div className="bg-white">
                                    <Spinner type="cover"/>
                                </div>
                                :
                                // @ts-ignore
                                <div className="cards-container" ref={infiniteRef}>
                                    {/*<InfiniteScroll*/}
                                    {/*    pageStart={0}*/}
                                    {/*    loadMore={() => loadData()}*/}
                                    {/*    hasMore={canLoadMore}*/}
                                    {/*    loader={<Spinner/>}*/}
                                    {/*>*/}
                                    {
                                        exhibitions.map((exhibition: any, index) => {
                                            const {id, name, image, organisation} = exhibition.data;
                                            const {locations} = organisation.data;
                                            // let {startedAt, endedAt} = exhibition.data;

                                            return (
                                                <div key={id}>
                                                    <Bootcamp/>
                                                    Exhibition compoentn
                                                    {/* <Exhibition
                                                        id={id}
                                                        exhibitionImg={image && [image.data.signedUrl1920x1080Webp, image.data.signedUrl1920x1080, image.data.signedUrl]}
                                                        title={name}
                                                        isLoggedIn={globalProps.isLoggedIn}
                                                        onClick={handleExhibitionClick}
                                                        galleryName={organisation.data.name}
                                                        startedAt={startedAt}
                                                        endedAt={endedAt}
                                                        locations={locations}
                                                    /> */}
                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        isLoadingMore &&
                                        <Spinner/>
                                    }
                                    {/*</InfiniteScroll>*/}
                                </div>
                        }
                    </ScrollAnimation>
                </div>
            </div>
        </div> : <LoadingPage fadeUp={isLoaded} />
    )
};

export default withRouter(Home);
