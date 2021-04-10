import React, {lazy, Suspense, useEffect, useState} from 'react';
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter, useHistory} from 'react-router-dom'
/** Shared components */
import {ITypeGlobal, ITypeRenderRoute} from "./types"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoadingPage from "../../components/LoadingPage";
import SearchPage from "../Search";
const Favourites = lazy(() => import ("../Favourites"));
/** Auth components */
import Login from '../Login';
import SignUp from '../Signup';
import Verify from '../Verify';
import ResetPage from '../ResetPassword'
import ForgotPassword from '../ForgotPassword';
const ProfilePage = lazy(() => import ("../Profile"))
/** Bootcamps components */
const BootcampsPage = lazy(() => import ("../Bootcamps"));
import BootcampDetails from "../Bootcamps/Details";
/** Courses components */
import CoursesPage from "../Courses";
import CourseDetails from "../Courses/Details";
import ArtistDetails from "../ArtistDetails";

const HomePage = lazy(() => import ("../Home"));



const RenderRoutes = React.memo(({isLoggedIn, redirectPath}: ITypeRenderRoute) => {
    return (
        <Suspense fallback={<LoadingPage/>}>
            <Switch>
                {/*ROUTES: FOR ALL CONDITIONS*/}
                <Route exact path="/bootcamps" component={() => <BootcampsPage/>}/>
                <Route exact path="/bootcamps/:id" component={() => <BootcampDetails/>}/>
                <Route exact path="/courses" component={() => <CoursesPage/>}/>
                <Route exact path="/courses/:id" component={() => <CourseDetails/>}/>

                <Route exact path="/reset/:token" isLoggedIn={isLoggedIn} component={ResetPage}/>
                                
                {/* <Route exact path="/artists/:id" component={ArtistDetails}/> */}

                {/*ROUTES: NOT LOGGED IN*/}
                {!isLoggedIn && <Route exact path="/" component={() => <HomePage isLoggedIn={isLoggedIn}/>}/>}
                {!isLoggedIn && <Route exact path="/login" component={Login}/>}
                {!isLoggedIn && <Route exact path="/signup" component={SignUp}/>}
                {!isLoggedIn && <Route exact path="/verify" component={Verify}/>}
                <Route isLoggedIn={isLoggedIn} exact path="/forgot-password" component={ForgotPassword}/>


                {/*ROUTES: ONLY LOGGED IN*/}
                {isLoggedIn && <Route exact path="/profile" component={ProfilePage}/>}
                {isLoggedIn && <Route exact path="/favourites" component={Favourites}/>}
                {isLoggedIn && <Route exact path="/search" component={SearchPage}/>}

                {
                    isLoggedIn ?
                        !!redirectPath ?
                            //@ts-ignore
                            <Route path="*" component={() => <Redirect to={redirectPath}/>}/>
                            :
                            <Route path="*" component={() => <Redirect to={'/bootcamps'}/>}/>
                        :
                        <Route path="*" component={() => <Redirect to={'/'}/>}/>
                }
            </Switch>
        </Suspense>
    )
});

const Root = ({isLoggedIn, profile, redirectPath, isConversation, vH, isFirstLoad, artworkId, setArtworkId}) => {
    const history = useHistory();
    const [isHeader, setHeader] = useState(null);
    const [isHome, setHome] = useState(null);
    const [isProfile, setProfile] = useState(null);
    const [routeName, setRouteName] = useState(location.pathname);
    const [isAuthenticationPage, setAuthenticatingPage] = useState(null);
    const [isSearchPage, setIsSearchPage] = useState(false);
    const [isArtworksPage, setIsArtworksPage] = useState(false);
    const [loginPath, setLoginPath] = useState('/login');
    const [mokeDelay, setMokeDelay] = useState(false);
    const [isFlex, setFlex] = useState(false);
    const [mokeHeadersDelay, setMokeHeadersDelay] = useState(true);
    const [vHeight, setViewHeight] = useState(0);
    const [headerDelay, setHeaderDelay] = useState(8000); // for header delay
    const [isCurate, setCurate] = useState(false); // for header delay


    useEffect(() => {
        if(isFirstLoad){
            setHeaderDelay(0);
            console.log('isFirstLoad in global', isFirstLoad, headerDelay);
        }
        else {
            setHeaderDelay(8000);
            console.log('isFirstLoad in global', isFirstLoad, headerDelay);
        }
    }, [isFirstLoad]);


    useEffect(() => {
        handleHeader(history.location.pathname);
        const body = document.querySelector('.body-height');
    }, [vH]);

    useEffect(() => {
        if(isConversation){
            setFlex(true);
        }
        else{
            setTimeout(() => {
                setFlex(false);
            }, 400);
        }
    }, [isConversation]);

    // useEffect(() => {
    //     const body = document.querySelector('.body-height');
    //     body && setVH(body.clientHeight);
    // }, []);

    useEffect(() => {
        return history.listen((location) => {
            setRouteName(location.pathname);
            handleHeader(location.pathname);
            if(location.pathname === '/'){
                setLoginPath('/login')
            }
            else{
                setLoginPath(`/login?${location.pathname}`)
            }
        })
    }, [history]);

    // useEffect(() => {
    //     console.log(' => in global ', exhibitionsFirstLoad);
    //
    //     if(exhibitionsFirstLoad === false){
    //         setMokeHeadersDelay(false);
    //         setTimeout(() => {
    //             setMokeHeadersDelay(true);
    //             setHeaderDelay(0);
    //         }, headerDelay);
    //         setTimeout(() => {
    //             setMokeDelay(true);
    //         }, FOOTER_DELAY);
    //     }
    // }, [exhibitionsFirstLoad, history]);

    const handleHeader = (pathname) => {
        if (pathname.includes('curate') || pathname.includes('invite')) {
            setHeader(false);
        } else {
            setHeader(true);
        }
        if (pathname.includes('login') || pathname.includes('/signup') || pathname === '/verify' || pathname === '/forgot-password' || pathname.includes('/reset') ) {
            setHome(true);
        } else {
            setHome(false);
        }
        if (pathname.includes('/artworks/')) {
            setIsArtworksPage(true)
        } else {
            setIsArtworksPage(false);
        }
        if (pathname === '/profile') {
            setProfile(true);
        } else {
            setProfile(false);
        }
        if (pathname.includes('/curate') || pathname.includes('login') || pathname.includes('/signup') || pathname === '/verify' || pathname === '/forgot-password') {
            setCurate(true);
        } else {
            setCurate(false);
        }
        if (pathname.includes('login') || pathname.includes('/signup') || pathname === '/verify' || pathname === '/forgot-password') {
            setAuthenticatingPage(true);
            document.querySelector("html").classList.add("full");
            document.querySelector("body").classList.add("full");
            document.getElementById("root").classList.add("full");
        } else {
            setAuthenticatingPage(false);
            document.querySelector("html").classList.remove("full");
            document.querySelector("body").classList.remove("full");
            document.getElementById("root").classList.remove("full");
        }
        // if (pathname === '/search') {
        //     setIsSearchPage(true);
        // } else {
        //     setIsSearchPage(false);
        // }
        setArtworkId(null);
    };

    return (
        <>
            {(isArtworksPage === false && ((routeName === '/') || routeName !== '/') && isHeader ) &&
              <Header routeName={routeName} isLoggedIn={isLoggedIn} isHome={isHome} isProfile={isProfile}
                      mokeHeadersDelay={routeName === '/'}
                      isSearchPage={isSearchPage}
                      loginPath={loginPath}
                      isSidebar={isFlex}
                      isAuthenticationPage={isAuthenticationPage}/>
                      }
                        {/*// :TODO please dont remove these two comments */}
                        <div className={`${isFlex ? 'flex-box' : ''} ${isCurate ? '' : 'zoom'}`}>
                      {/*<div className={`${isFlex ? 'flex-box' : ''}`}>*/}
                            <RenderRoutes isLoggedIn={isLoggedIn} redirectPath={redirectPath}/>
                            {<div className={`chat-sticky-wrapper ${isConversation ? 'active' : ''}`}>
                                {/*<div style={{ height: vHeight }}>*/}
                                    <div className={`chats-wrapper ${isConversation ? 'active' : ''}`}>
                                            <Conversation onClose={() => console.log('closing!')}  />
                                    </div>
                                {/*</div>*/}
                            </div>}
                            <div className='body-height' />
                      </div>
            {(mokeDelay || routeName !== '/') && isArtworksPage === false && (!isHome && ((routeName === '/' && !exhibitionsFirstLoad) || routeName !== '/') && <Footer/>)}
            <div>
                {artworkId && <ArtworkDetailsContainer artworkId={artworkId} onHide={() => setArtworkId(null)} isConversation={isConversation} onLeftClick={() => console.log('Left Arrow Clicked!')} onRightClick={() => console.log('Right Arrow Clicked!')} arrows={false} />}
            </div>
        </>
    )
};

const Global: React.FC<ITypeGlobal> = ({isLoggedIn,  updateProfileData, redirectPath, profile}) => {
    useEffect(() => {
        if(profile && profile.id){
            console.log('profile in 123 : ', profile);
        }
    }, [profile.id]);

    useEffect(() => {
        if (isLoggedIn) {
            // updateProfileData();
            setTimeout(() => {
                console.log('userProfile : ', profile);
            }, 1000);
        }
    }, [isLoggedIn])
    return (
        <BrowserRouter>
            <Root artworkId={artworkId} profile={profile}  redirectPath={redirectPath} setVH={setVH} isLoggedIn={isLoggedIn} isConversation={isConversation} vH={vH} isFirstLoad={isFirstLoad} setArtworkId={setArtworkId} />
        </BrowserRouter>
    )
};

export default Global;