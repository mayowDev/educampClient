import React, {lazy, Suspense, useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
/** Shared components */
import HomePage from "../Home"
import NotFound from "../../views/404/NoFound";
// /** Auth components */
import Login from '../Login';
import SignUp from '../Signup';
import Verify from '../Verify';
import ForgotPassword from '../ForgotPassword';
import ResetPage from '../ResetPassword'
import ProfilePage from '../Profile'
// /** Course components */
import CourseDetails from "../Courses/Details"
import CoursesPage from "../Courses";

const RenderRoutes = ({isLoggedIn}) => {  
    return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/courses" component={CoursesPage}/>
                <Route exact path="/courses/:id" component={CourseDetails}/>
                <Route exact path="/reset/:token"  component={ResetPage}/>
                {!isLoggedIn && <Route exact path="/login" component={Login}/>}
                {!isLoggedIn && <Route exact path="/register" component={SignUp}/>}
                {!isLoggedIn && <Route exact path="/verify" component={Verify}/>}
                {!isLoggedIn && <Route exact path="/forgot-password" component={ForgotPassword}/> }
                {isLoggedIn && <Route exact path="/profile" component={()=><ProfilePage/>}/>}
               <Route component={NotFound}/>
            </Switch>
     )
};

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

const Global = (props) => {    
    return (
        <BrowserRouter>
            <RenderRoutes isLoggedIn={props.isLoggedIn}/>
        </BrowserRouter>
    )
};

export default Global;