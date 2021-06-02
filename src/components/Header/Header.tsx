import React, { useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../assets/images/udemy-logo-coral.svg';
import {IHeaderProps} from './types';
import MenuItem from '../MenuItem';
import Button from '../Button';
import IconBtn from '../IconBtn';
import Dropdown from '../Dropdown';


const Header: React.FC<IHeaderProps> = (props) => {
    const {  isLoggedIn,routeName,changeSearch,searchQuery,isHome, isProfile, logout} = props;    
    console.log('isLoggedIn', isLoggedIn)
    const history = useHistory();
    const [nav, setNav] = useState(false);
    const [navBright, setNavBright] = useState(false);

    const handleSearchChange = (value) => {
        // if (value?.length > 2 && history.location.pathname !== "/search") {
        //     history.push('/search')
        // }
        // if(changeSearch) changeSearch(value);
    };

    const handleLogout =async ()=>{
       await logout();
    }
   
    const isLinkActive = (route) => {
        return routeName === route ? "active" : '';
    };
    const handleMouseEnter = ()=>{
        console.log(onmouseenter)
        // alert('onmouseenter')
    }

    return (
        <>
            <header className={`header ${history.location.pathname === '/' && ''} ${!isHome ? 'header--bright' : 'header--default'} ${isHome && nav ? 'active' : ''} ${!isHome && navBright ? 'active' : ''} ${isProfile ? 'header--gray' : ''}  ${isLoggedIn ? 'header--logged-in' : ''}`}>     
                <div className="header--flex -one">
                    <Link to='/' className='header__logo'>
                        <img src={Logo} alt="Logo" height={18} onClick={() => setNav(false)}/>
                    </Link>
                    {/* <Link to='/' className='category'>Categories</Link> */}
                    <MenuItem value=" Categories" to="/categories"/>
                    <label
                        className={`search_bar `}>
                        <input value={searchQuery} onChange={(e) => handleSearchChange(e.target.value)}
                                autoFocus={true}
                                type="text"
                                placeholder="Search anything"
                        />
                    </label>
                </div>
                <div className="header--flex">
                    <nav className='header__nav'>
                        <ul>
                            <li >
                                <MenuItem value='Courses' to="/courses" className={isLinkActive('/courses') || isLinkActive('/')}/>
                            </li>
                            <li >
                                <MenuItem value='Categories' to="/categories" className={isLinkActive('/categories')}/>
                            </li>
                            <li >
                                <MenuItem value='Instructors' to="/instructors" className={isLinkActive('/instructors')}/>
                            </li>
                            <li >
                                <MenuItem value='Teach on Educamp' to="/teach" className={isLinkActive('/teach')}/>
                            </li>
                            <li  className={!isLoggedIn ? 'not-logged-in' : ''}>
                                {
                                !isLoggedIn &&
                                <>
                                    <IconBtn onMouseEnter={handleMouseEnter} onClick={e=> alert("Your cart is empty!")} className="user--cart" type="cart" />
                                    <Button value='Sign In' actionType='login' type='primary' to='/login'/> 
                                    <Button value='Sign Up' actionType='register' type='primary' to='/register'/> 
                                </>
                                }
                            </li>
                            {isLoggedIn &&
                            <>
                                <IconBtn onClick={e=> alert("Your cart is empty!")} className="user--cart" type="cart" />
                                <IconBtn className="user--favourites" type="heart" />
                                <IconBtn className="user--notifications" type="bell" />
                                <li  className={!isLoggedIn ? 'not-logged-in' : 'logged-in'}>
                                    <Dropdown icon={<IconBtn className="user--profile" type="user" />}>
                                        <Link to="/profile">My Profile</Link>
                                        <Link to="/settings">Settings</Link>
                                        <Link to="/help">Help</Link>
                                        <Link className="logout-btn" to="/" onClick={()=>handleLogout()}>Logout</Link>
                                    </Dropdown>                                    
                                </li>
                            </>
                            }
                            

                        </ul>
                    </nav>
                    <div className="mobile-btn">
                        <IconBtn onClick={() => setNavBright(!navBright)}
                                    noHover={true}
                                    type={navBright ? "cross" : 'menu'}/>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header
