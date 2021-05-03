import React, { useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../assets/icons/bright-logo2.svg';
import VLogoBright from '../../assets/icons/bright-v.svg';

// import ChatIcon from '../../assets/icons/chat.svg';
// import SearchIcon from '../../assets/icons/search.svg';
// import FavouriteIcon from '../../assets/icons/favourite.svg';
import {IHeaderProps} from './types';
import ProfilePlaceholder from '../../assets/icons/profile-placeholder.svg';
import {P1, SubTitle} from '../Typography';
import MenuItem from '../MenuItem';
// import Notification from "../Notification";
import Button from '../Button';
import {logout} from '../../utils'
import IconBtn from '../IconBtn';

// import Conversation from '../../containers/Conversation';
// import Inbox from "../../containers/Inbox";
// import ConversationIcon from "./ConversationIcon";

const Header: React.FC<IHeaderProps> = (props) => {
    const { isSidebar, mokeHeadersDelay, isLoggedIn,routeName,changeSearch,searchQuery,profileData,isHome,
        isProfile,isAuthenticationPage,setChat, isSearchPage,isLoginForgot, isChat
    } = props;

    const history = useHistory();
    const [nav, setNav] = useState(false);
    const [navBright, setNavBright] = useState(false);
    // const [isSearchFocus, setIsSearchFocus] = useState(false);
    
    // const [shadow, setShadow] = useState(false);
    // const [isChat, setChat] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    // const [isInbox, setInbox] = useState(false);
    // const [isConversation, setConversation] = useState(false);

    // const handleListItemClick = (id) => {
    //     // console.log('Item id', id);
    //     // setInbox(true);
    // };
    // const handleConversationClose = () => {
    //     // setChat(false);
    //     setTimeout(() => {
    //         setChat(false);
    //     }, 500);
    // };

    const handleSearchChange = (value) => {
        if (value.length > 2 && history.location.pathname !== "/search") {
            history.push('/search')
        }
        if(changeSearch) changeSearch(value);
    };

    const handleConversation = () => {
        if (isChat === false && isSidebar === false && setChat) {
            setChat(true);
        } else {
            setChat && setChat(false);
        }
        setNavBright(false);
    };

    const isLinkActive = (route) => {
        return routeName === route ? "active" : '';
    };

    const handleSearchClick = () => {
        history.push('/search');
        setNavBright(false);
        setNav(false);
    }

    return (
        <>
            <header
                className={`header ${history.location.pathname === '/' ? (mokeHeadersDelay ? '' : 'header--hidden') : ''} ${!isHome ? 'header--bright' : 'header--default'} ${isHome && nav ? 'active' : ''} ${!isHome && navBright ? 'active' : ''} ${isProfile ? 'header--gray' : ''} ${isAuthenticationPage ? 'header--authentication' : ''} ${isSearchPage ? 'search-page' : ''} ${isLoginForgot ? 'login-forgot' : ''} ${isLoggedIn ? 'header--logged-in' : ''}`}>

                {
                    isHome === true ? (
                        <>
                            <Link to='/' className='header__logo'>
                                <img src={Logo} alt={"Logo"} width={37} height={39}/>
                            </Link>
                            <div className="header--flex">
                                <nav className='header__nav'>
                                    <ul>
                                        <li className={isLinkActive('/exhibitions')}>
                                            <Link className="active" to="/exhibitions">
                                                <SubTitle className='nav-subtitle' value='Exhibitions'/>
                                            </Link>
                                        </li>
                                        <li className={isLinkActive('/exhibitions')}>
                                            <Link to="/institutions">
                                                <SubTitle className='nav-subtitle' value='Institutions'/>
                                            </Link>
                                        </li>
                                        <li className={isLinkActive('/exhibitions')}>
                                            <Link to="/galleries">
                                                <SubTitle className='nav-subtitle' value='Galleries'/>
                                            </Link>
                                        </li>
                                        <li className={isLinkActive('/exhibitions')}>
                                            <Link to="/collectives">
                                                <SubTitle className='nav-subtitle' value='Collectives'/>
                                            </Link>
                                        </li>
                                    </ul>
                                    {
                                        isLoggedIn === false && (
                                            <>
                                                <div className="vl">
                                                    <span/>
                                                </div>
                                                <ul className='btn'>
                                                    <li className={isLinkActive('/exhibitions')}>
                                                        <Link to="/login">
                                                            <SubTitle className='nav-subtitle' value='Log in'/>
                                                        </Link>
                                                    </li>
                                                    <li className={isLinkActive('/exhibitions')}>
                                                        <Link to="/signup">
                                                            <SubTitle className='nav-subtitle' value='Sign up'/>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </>
                                        )
                                    }
                                </nav>

                                {isLoggedIn === true && history.location.pathname === '/signup' &&
                                <div className="profile-pic_wrapper">
                                  <div className={`profile-pic ${profileData.image ? '' : ''}`}>
                                    <Link to="/profile">
                                      <img
                                        src={profileData.image ? profileData.image.data.signedUrl120 : ProfilePlaceholder}
                                        alt="Profile Pic"/>
                                    </Link>
                                  </div>
                                  <div className="logout-dropdown">
                                    <div onClick={() => logout()}>
                                      <P1 value="Log out"/>
                                    </div>
                                  </div>
                                </div>
                                }
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="header--flex">
                                <Link to={'/'} className='header__logo'>
                                    <img src={VLogoBright} alt="Logo" height={14} onClick={() => setNav(false)}/>
                                </Link>
                                <label
                                    className={`search_bar ${(isSearchActive || searchQuery?.length) ? 'active' : ''}`}>
                                    <MenuItem value="Search"/>
                                    <input value={searchQuery} onChange={(e) => handleSearchChange(e.target.value)}
                                           autoFocus={searchQuery!.length > 0}
                                           type="text"/>
                                    {/*<div className="icon" onClick={() => {window.innerWidth < 614 && handleSearchClick()}}>*/}
                                    {/*    <img src={SearchIcon} width={18} height={18}  alt="Search"/>*/}
                                    {/*</div>*/}
                                </label>
                            </div>
                            <div className="header--flex">
                                <nav className='header__nav'>
                                    <ul>
                                        <li/>
                                        <li onClick={() => setNavBright(false)}>
                                            <MenuItem value='Discover' to='/discover'
                                                      className={isLinkActive('/discover') || isLinkActive('/')}/>
                                        </li>
                                        <li onClick={() => setNavBright(false)}>
                                            <MenuItem value='Exhibitions' to='/exhibitions'
                                                      className={isLinkActive('/exhibitions')}/>
                                        </li>
                                        <li onClick={() => setNavBright(false)}>
                                            <MenuItem value='Institutions' to='/institutions'
                                                      className={isLinkActive('/institutions')}/>
                                        </li>
                                        <li onClick={() => setNavBright(false)}>
                                            <MenuItem value='Galleries' to='/galleries'
                                                      className={isLinkActive('/galleries')}/>
                                        </li>
                                        <li onClick={() => setNavBright(false)}>
                                            <MenuItem value='Collectives' to='/collectives'
                                                      className={isLinkActive('/collectives')}/>
                                        </li>
                                        
                                        <li onClick={() => setNavBright(false)}
                                            className={!isLoggedIn ? 'not-logged-in' : ''}>
                                            {/*className={`${isLinkActive('/profile')} ${navBright?'mobile-nav-bright':''} ${isLoggedIn?'nav-border':''}`}*/}
                                            {
                                                !isLoggedIn ?
                                                    <Button value='Login' className='button__bright' to='/login'/> :
                                                    <div className={`logged-in-chat ${isChat ? 'active' : ''}`}
                                                         onClick={() => handleConversation()}>conversation icon</div>
                                            }
                                            {
                                                !isLoggedIn ?
                                                    <Button value='Sign Up' className='button__bright'
                                                            type='secondary'
                                                            to='/signup'/> :
                                                    <div className={`${isLinkActive('/profile')}`}>
                                                        <IconBtn type="user" to='/profile'/>
                                                    </div>
                                            }
                                        </li>

                                    </ul>
                                    {/*<div className="vl">*/}

                                    {/*</div>*/}
                                    {/*<ul className='header__nav--icon-links'>*/}
                                    {/*    /!*<li className={isLinkActive('/favourites')} onClick={() => setNavBright(false)}>*!/*/}
                                    {/*    /!*<Link to={isLoggedIn ? "/favourites": loginPath}>*!/*/}
                                    {/*    /!*    {*!/*/}
                                    {/*    /!*        isLoggedIn ?*!/*/}
                                    {/*    /!*        <>*!/*/}
                                    {/*    /!*            <svg className="favorites" width="25" height="19" viewBox="0 0 25 19"*!/*/}
                                    {/*    /!*            fill="none"*!/*/}
                                    {/*    /!*            xmlns="http://www.w3.org/2000/svg">*!/*/}
                                    {/*    /!*            <path*!/*/}
                                    {/*    /!*                d="M12.2455 6.66016L12.608 7.04174L12.9705 6.66016L18.608 0.725953L23.9184 6.31579L12.608 18.2214L1.29769 6.31579L6.60803 0.725953L12.2455 6.66016Z"/>*!/*/}
                                    {/*    /!*            </svg>*!/*/}
                                    {/*    /!*            <SubTitle value='Favourites'/>*!/*/}
                                    {/*    /!*        </> :*!/*/}
                                    {/*    /!*        <>*!/*/}
                                    {/*    /!*          <span />*!/*/}
                                    {/*    /!*          <SubTitle value='Log In'/>*!/*/}
                                    {/*    /!*        </>*!/*/}
                                    {/*    /!*    }*!/*/}
                                    {/*    /!*</Link>*!/*/}
                                    {/*    /!*<span />*!/*/}
                                    {/*    /!*<div className='icon-menu-item'>*!/*/}
                                    {/*    /!*    /!*<MenuItem value={isLoggedIn ? 'Favourites' : 'Log In'} to={isLoggedIn ? '/favourites' : '/login'} icon={isLoggedIn && FavouriteIcon} />*!/*!/*/}
                                    {/*    /!*    <Button value='Log in' />*!/*/}
                                    {/*    /!*</div>*!/*/}
                                    {/*    /!*<Button value='Log in' className='button__bright' to='/login' />*!/*/}
                                    {/*    /!*</li>*!/*/}
                                    {/*    /!*<li className={(isConversation || currentConversation) ? 'active mr-none' : 'mr-none'} onClick={() => {isLoggedIn ? handleConversation() : console.log('sign up clicked!')}}>*!/*/}
                                    {/*    /!*<Link to={isLoggedIn ? null: '/signup'} style={{ borderBottom: 0 }}>*!/*/}
                                    {/*    /!*{*!/*/}
                                    {/*    /!*    isLoggedIn ?*!/*/}
                                    {/*    /!*        <ConversationIcon /> :*!/*/}
                                    {/*    /!*        <>*!/*/}
                                    {/*    /!*            <span />*!/*/}
                                    {/*    /!*            <SubTitle value='Sign Up'/>*!/*/}
                                    {/*    /!*        </>*!/*/}
                                    {/*    /!*}*!/*/}

                                    {/*    /!*</Link>*!/*/}

                                    {/*    /!*{isLoggedIn ? <ConversationIcon /> : <MenuItem value='Sign up' to='/signup' />}*!/*/}
                                    {/*    /!*<MenuItem value='Sign up' to='/signup' />*!/*/}
                                    {/*    /!*<Button value='Log in' />*!/*/}

                                    {/*    /!*</li>*!/*/}
                                    {/*    <li className="mobile-profile-wrapper">*/}
                                    {/*        {*/}
                                    {/*            isLoggedIn && (*/}
                                    {/*                <div onClick={() => setNavBright(false)}>*/}
                                    {/*                    <Link to="/profile">*/}
                                    {/*                        <div className="mobile-profile">*/}
                                    {/*                            <SubTitle value={profileData.name}/>*/}
                                    {/*                            <div className="profile_image">*/}
                                    {/*                                <img*/}
                                    {/*                                    src={profileData.image ? profileData.image.data.signedUrl120 : ProfilePlaceholder}*/}
                                    {/*                                    alt="Profile Pic"/>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </Link>*/}
                                    {/*                </div>*/}
                                    {/*            )*/}
                                    {/*        }*/}
                                    {/*    </li>*/}
                                    {/*</ul>*/}
                                </nav>

                                {/*{isLoggedIn && (*/}
                                {/*    <div className="profile-pic_wrapper">*/}
                                {/*        <div className={`profile-pic ${profileData.image ? '' : ''}`}>*/}
                                {/*            <Link to="/profile">*/}
                                {/*                <img width={48} height={48}*/}
                                {/*                    src={profileData.image ? profileData.image.data.signedUrl120 : ProfilePlaceholder}*/}
                                {/*                    alt="Profile Pic"/>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*        <div className="logout-dropdown">*/}
                                {/*            <div onClick={() => logout()}>*/}
                                {/*                <P1 value="Log out"/>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*)}*/}
                                <div className="mobile-btn">
                                    {/*<span></span>*/}
                                    {/*<span></span>*/}
                                    {/*<span></span>*/}
                                    <IconBtn onClick={() => setNavBright(!navBright)}
                                             noHover={true}
                                             type={navBright ? "cross" : 'menu'}/>
                                </div>
                            </div>
                        </>
                    )
                }
            </header>
            {/*{(isConversation || currentConversation) && isLoggedIn && <div className={'chats-wrapper active'}>*/}
            {/*  <Conversation onClose={() => handleConversationClose()}  />*/}
            {/*</div>}*/}
        </>
    )
};

export default Header
