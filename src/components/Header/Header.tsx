import React, { useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../assets/images/logo-white@2x.png';
import {IHeaderProps} from './types';
import MenuItem from '../MenuItem';
import Button from '../Button';
import IconBtn from '../IconBtn';
import Dropdown from '../Dropdown';


const Header: React.FC<IHeaderProps> = (props) => {
    // console.log('Header props', props);
    const {  isLoggedIn,routeName,changeSearch,searchQuery,isHome, isProfile, logout} = props;    
    
    const history = useHistory();
    const [nav, setNav] = useState(false);
    const [navBright, setNavBright] = useState(false);

    const handleSearchChange = (value) => {
        if (value?.length > 2 && history.location.pathname !== "/search") {
            history.push('/search')
        }
        if(changeSearch) changeSearch(value);
    };

    const handleLogout =async ()=>{
       await logout();
    }
   
    const isLinkActive = (route) => {
        return routeName === route ? "active" : '';
    };

    return (
        <>
            <header className={`header ${history.location.pathname === '/' && ''} ${!isHome ? 'header--bright' : 'header--default'} ${isHome && nav ? 'active' : ''} ${!isHome && navBright ? 'active' : ''} ${isProfile ? 'header--gray' : ''}  ${isLoggedIn ? 'header--logged-in' : ''}`}>     
                <div className="header--flex">
                    <Link to='/' className='header__logo'>
                        <img src={Logo} alt="Logo" height={14} onClick={() => setNav(false)}/>
                    </Link>
                    <label
                        className={`search_bar `}>
                        <MenuItem value="Search" to="/search"/>
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
                                <MenuItem value='Courses' to="/courses" className={isLinkActive('/courses') || isLinkActive('/')}/>
                            </li>
                            <li onClick={() => setNavBright(false)}>
                                <MenuItem value='Categories' to="/categories" className={isLinkActive('/categories')}/>
                            </li>
                            <li onClick={() => setNavBright(false)}>
                                <MenuItem value='Instructors' to="/instructors" className={isLinkActive('/instructors')}/>
                            </li>
                            <li onClick={() => setNavBright(false)}>
                                <MenuItem value='Teach on Educamp' to="/teach" className={isLinkActive('/teach')}/>
                            </li>
                            <li onClick={() => setNavBright(false)} className={!isLoggedIn ? 'not-logged-in' : ''}>
                                {
                                !isLoggedIn &&
                                <>
                                    <Button value='Sign In' className='' type='primary' to='/login'/> 
                                    <Button value='Sign Up' className='' type='primary' to='/register'/> 
                                </>
                                }
                            </li>
                            {isLoggedIn &&
                                <li onClick={() => setNavBright(false)} className={!isLoggedIn ? 'not-logged-in' : 'logged-in'}>
                                    <div className={`${isLinkActive('/profile')}`}>
                                        <Dropdown icon={<IconBtn className="user--profile" type="user" />}>
                                            <Link to="/profile">My Profile</Link>
                                            <Link to="/settings">Settings</Link>
                                            <Link to="/help">Help</Link>
                                            <Link className="logout-btn" to="/" onClick={()=>handleLogout()}>Logout</Link>
                                        </Dropdown>
                                    
                                    </div>
                                </li>
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
