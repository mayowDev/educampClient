import React, {lazy, Suspense, useEffect, useState} from 'react';
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter, useHistory} from 'react-router-dom'
/** Shared components */
import {ITypeGlobal, ITypeRenderRoute} from "./types"
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import LoadingPage from "../../components/LoadingPage";
// import SearchPage from "../Search";
// const Favourites = lazy(() => import ("../Favourites"));
// /** Auth components */
import Login from '../Login';
import SignUp from '../Signup';
import Verify from '../Verify';
import ForgotPassword from '../ForgotPassword';
import ResetPage from '../ResetPassword'
import ProfilePage from '../Profile'
// /** Bootcamps components */
// import  BootcampsPage from "../Bootcamps";
// const BootcampDetails =  lazy(() => import ("../Bootcamps/Details"));
// /** Courses components */
// const CoursesPage = lazy(() => import ( "../Courses"));
// const CourseDetails = lazy(() => import ("../Courses/Details"));

// const HomePage = lazy(() => import ("../Home"));


const RenderRoutes = React.memo(({isLoggedIn}: ITypeRenderRoute) => {
    console.log('isLoggedIn=',isLoggedIn);
    
    return (
        <Suspense fallback={<LoadingPage/>}>
             <Switch>
                 {/* ROUTES: FOR ALL CONDITIONS */}
                 {/* <Route exact path="/bootcamps" component={() => <BootcampsPage/>}/> */}
                 {/* <Route exact path="/bootcamps/:id" component={BootcampDetails}/> */}
                 {/* <Route exact path="/courses" component={() => <CoursesPage/>}/> */}
                 {/* <Route exact path="/courses/:id" component={CourseDetails}/> */}
                 {/* <Route exact path="/courses/:id" component={() => <CourseDetails/>}/> */}

                 {/* <Route exact path="/reset/:token" isLoggedIn={isLoggedIn} component={ResetPage}/> */}
                                
                 {/* <Route exact path="/artists/:id" component={ArtistDetails}/> */}

                 {/*ROUTES: NOT LOGGED IN*/}
                 {/* {!isLoggedIn && <Route exact path="/" component={() => <HomePage isLoggedIn={isLoggedIn}/>}/>} */}
                 { <Route exact path="/login" component={Login}/>}
                 { <Route exact path="/register" component={SignUp}/>}
                 {!isLoggedIn && <Route exact path="/verify" component={Verify}/>}
                 {/* <Route exact path="/forgot-password" component={ForgotPassword}/> */}


                 {/*ROUTES: ONLY LOGGED IN*/}
                 {<Route exact path="/profile" component={ProfilePage}/>}
                 {/* {isLoggedIn && <Route exact path="/favourites" component={Favourites}/>} */}
                 {/* {isLoggedIn && <Route exact path="/search" component={SearchPage}/>} */}

                 {/* {
                     isLoggedIn ?
                         !!redirectPath ?
                             @ts-ignore
                             <Route path="*" component={() => <Redirect to={redirectPath}/>}/>
                             :
                             <Route path="*" component={() => <Redirect to={'/bootcamps'}/>}/>
                         :
                         <Route path="*" component={() => <Redirect to={'/'}/>}/>
                 } */}
             </Switch>
         </Suspense>
     )
});

// const Root = ({isLoggedIn, redirectPath, isConversation,  isFirstLoad, profile, bootcampId, setBootcampId}) => {
//     const history = useHistory();
//     const [isHeader, setHeader] = useState<boolean>(false);
//     const [isHome, setHome] = useState<boolean>(false);
//     const [isProfile, setProfile] = useState<boolean>(false);
//     const [routeName, setRouteName] = useState(location.pathname);
//     const [isAuthenticationPage, setAuthenticatingPage] = useState<boolean>(false);
//     const [isSearchPage, setIsSearchPage] = useState<boolean>(false);
//     const [isBootcampsPage, setIsBootcampsPage] = useState<boolean>(false);
//     const [loginPath, setLoginPath] = useState<string>('/login');
//     // const [mokeDelay, setMokeDelay] = useState<boolean>(false);
//     const [isFlex, setFlex] = useState<boolean>(false);
//     // const [mokeHeadersDelay, setMokeHeadersDelay] = useState<Boolean>(true);
//     // const [vHeight, setViewHeight] = useState<number>(0);
//     const [headerDelay, setHeaderDelay] = useState<number>(8000); // for header delay
//     const [isCurate, setCurate] = useState<boolean>(false); // for header delay


//     useEffect(() => {
//         if(isFirstLoad){
//             setHeaderDelay(0);
//             console.log('isFirstLoad in global', isFirstLoad, headerDelay);
//         }
//         else {
//             setHeaderDelay(8000);
//             console.log('isFirstLoad in global', isFirstLoad, headerDelay);
//         }
//     }, [isFirstLoad]);


//     useEffect(() => {
//         handleHeader(history.location.pathname);
//         // const body = document.querySelector('.body-height');
//     }, []);

//     useEffect(() => {
//         if(isConversation){
//             setFlex(true);
//         }
//         else{
//             setTimeout(() => {
//                 setFlex(false);
//             }, 400);
//         }
//     }, [isConversation]);

//     useEffect(() => {
//         return history.listen(({location}) => {
//             setRouteName(location.pathname);
//             handleHeader(location.pathname);
//             if(location.pathname === '/'){
//                 setLoginPath('/login')
//             }
//             else{
//                 setLoginPath(`/login?${location.pathname}`)
//             }
//         })
//     }, [history]);

   

//     const handleHeader = (pathname) => {
//         if (pathname.includes('curate') || pathname.includes('invite')) {
//             setHeader(false);
//         } else {
//             setHeader(true);
//         }
//         if (pathname.includes('login') || pathname.includes('/signup') || pathname === '/verify' || pathname === '/forgot-password' || pathname.includes('/reset') ) {
//             setHome(true);
//         } else {
//             setHome(false);
//         }
//         if (pathname.includes('/bootcamps/')) {
//             setIsBootcampsPage(true)
//         } else {
//             setIsBootcampsPage(false);
//         }
//         if (pathname === '/profile') {
//             setProfile(true);
//         } else {
//             setProfile(false);
//         }
//         if (pathname.includes('/curate') || pathname.includes('login') || pathname.includes('/signup') || pathname === '/verify' || pathname === '/forgot-password') {
//             setCurate(true);
//         } else {
//             setCurate(false);
//         }
//         if (pathname.includes('login') || pathname.includes('/signup') || pathname === '/verify' || pathname === '/forgot-password') {
//             setAuthenticatingPage(true);
//             document.querySelector("html")!.classList.add("full");
//             document.querySelector("body")!.classList.add("full");
//             document.getElementById("root")!.classList.add("full");
//         } else {
//             setAuthenticatingPage(false);
//             document.querySelector("html")!.classList.remove("full");
//             document.querySelector("body")!.classList.remove("full");
//             document.getElementById("root")!.classList.remove("full");
//         }
//         if (pathname === '/search') {
//             setIsSearchPage(true);
//         } else {
//             setIsSearchPage(false);
//         }
//         setBootcampId(null);
//     };

//     return (
//         <>
//             {(isBootcampsPage === false && ((routeName === '/') || routeName !== '/') && isHeader ) &&
//               <Header routeName={routeName} isLoggedIn={isLoggedIn} isHome={isHome} isProfile={isProfile}
//                       mokeHeadersDelay={routeName === '/'}
//                       isSearchPage={isSearchPage}
//                       loginPath={loginPath}
//                       isSidebar={isFlex}
//                       isAuthenticationPage={isAuthenticationPage}/>
//                       }
//                         {/*// :TODO please dont remove these two comments */}
//                         <div className={`${isFlex ? 'flex-box' : ''} ${isCurate ? '' : 'zoom'}`}>
//                       {/*<div className={`${isFlex ? 'flex-box' : ''}`}>*/}
//                             <RenderRoutes isLoggedIn={isLoggedIn} redirectPath={redirectPath}/>
//                             {<div className={`chat-sticky-wrapper ${isConversation ? 'active' : ''}`}>
//                                 {/*<div style={{ height: vHeight }}>*/}
//                                     <div className={`chats-wrapper ${isConversation ? 'active' : ''}`}>
//                                             {/* <Conversation onClose={() => console.log('closing!')}  /> */}
//                                     </div>
//                                 {/*</div>*/}
//                             </div>}
//                             <div className='body-height' />
//                       </div>
//             { routeName !== '/' && isBootcampsPage === false && (!isHome && ((routeName === '/' && !isFirstLoad) || routeName !== '/') && <Footer/>)}
//             <div>
//                 {bootcampId && <BootcampDetails id={bootcampId} onHide={() => setBootcampId(null)}   />}
//             </div>
//         </>
//     )
// };

const Global = () => {
    // useEffect(() => {
    //     if(profile && profile.id){
    //         console.log('profile in global.tsx : ', profile);
    //     }
    // }, [profile.id]);

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         if(updateProfileData) updateProfileData()
    //         setTimeout(() => {
    //             console.log('userProfile : ', profile);
    //         }, 1000);
    //     }
    // }, [isLoggedIn])
    return (
        <BrowserRouter>
            <RenderRoutes/>
            {/* <BootcampsPage/> */}
        </BrowserRouter>
    )
};

export default Global;