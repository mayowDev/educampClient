import React, { useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../assets/images/logo-white@2x.png';

import {IHeaderProps} from './types';
import ProfilePlaceholder from '../../assets/icons/profile-placeholder.svg';
import {P1, SubTitle} from '../Typography';
import MenuItem from '../MenuItem';
import Button from '../Button';
import {logout} from '../../utils'
import IconBtn from '../IconBtn';


const Header: React.FC<IHeaderProps> = (props) => {
    console.log('Header props', props);
    
    const {  isLoggedIn,routeName,changeSearch,searchQuery,profileData,isHome,
        isProfile,isAuthenticationPage, isSearchPage,isLoginForgot
    } = props;    
    console.log('isHome', isHome);
    
    const history = useHistory();
    const [nav, setNav] = useState(false);
    const [navBright, setNavBright] = useState(false);

    const handleSearchChange = (value) => {
        if (value?.length > 2 && history.location.pathname !== "/search") {
            history.push('/search')
        }
        if(changeSearch) changeSearch(value);
    };

    
    const isLinkActive = (route) => {
        return routeName === route ? "active" : '';
    };

    return (
        <>
            <header
                className={`header ${history.location.pathname === '/' && ''} ${!isHome ? 'header--bright' : 'header--default'} ${isHome && nav ? 'active' : ''} ${!isHome && navBright ? 'active' : ''} ${isProfile ? 'header--gray' : ''} ${isAuthenticationPage ? 'header--authentication' : ''} ${isSearchPage ? 'search-page' : ''} ${isLoginForgot ? 'login-forgot' : ''} ${isLoggedIn ? 'header--logged-in' : ''}`}>

                {
                    isHome === true ? (
                        <>
                            <Link to='/' className='header__logo'>
                                <img src={Logo} alt={"Logo"} width={100} height={90}/>
                            </Link>
                            <div className="header--flex">
                                <nav className='header__nav'>
                                    <ul>
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
                                                <SubTitle className='nav-subtitle' value='Coll'/>
                                            </Link>
                                        </li>
                                    </ul>
                                    {
                                        !isLoggedIn && (
                                            <>
                                                <div className="vl">
                                                    <span/>
                                                </div>
                                                <ul className='btn'>
                                                    <li>
                                                        <Link to="/login">
                                                            <SubTitle className='nav-subtitle' value='Log in'/>
                                                        </Link>
                                                    </li>
                                                    <li className={isLinkActive('/exhibitions')}>
                                                        <Link to="/register">
                                                            <SubTitle className='nav-subtitle' value='Register'/>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </>
                                        )
                                    }
                                </nav>

                                {isLoggedIn && history.location.pathname === '/signup' &&
                                <div className="profile-pic_wrapper">
                                  <div className={`profile-pic }`}>
                                    <Link to="/profile">
                                      <img
                                        src={ProfilePlaceholder}
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
                                <Link to='/' className='header__logo'>
                                    <img src={Logo} alt="Logo" height={14} onClick={() => setNav(false)}/>
                                </Link>
                                <label
                                    className={`search_bar `}>
                                    <MenuItem value="Search"/>
                                    <input value={searchQuery} onChange={(e) => handleSearchChange(e.target.value)}
                                           autoFocus={true}
                                           type="text"
                                    />
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
                                            {
                                            !isLoggedIn &&
                                                <Button value='Sign In' className='button__bright'
                                                        type='secondary'
                                                        to='/login'/> 
                                            }
                                        </li>
                                        <li onClick={() => setNavBright(false)}
                                            className={!isLoggedIn ? 'not-logged-in' : ''}>
                                            {
                                                !isLoggedIn ?
                                                    <Button value='Sign Up' className='button__bright'
                                                            type='secondary'
                                                            to='/register'/> :
                                                    <div className={`${isLinkActive('/profile')}`}>
                                                        <IconBtn type="user" to='/profile'/>
                                                    </div>
                                            }
                                        </li>

                                    </ul>
                                </nav>
                                <div className="mobile-btn">
                                    <IconBtn onClick={() => setNavBright(!navBright)}
                                             noHover={true}
                                             type={navBright ? "cross" : 'menu'}/>
                                </div>
                            </div>
                        </>
                    )
                }
            </header>
        </>
    )
};

export default Header
