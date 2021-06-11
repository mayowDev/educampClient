import React, {useEffect, useState, Fragment} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../assets/images/udemy-logo-coral.svg';
import {IHeaderProps} from './types';
import MenuItem from '../MenuItem';
import Button from '../Button';
import IconBtn from '../IconBtn';
import Dropdown from '../Dropdown';
import  courseThumbnail  from '../../assets/images/coursesThumbnails/modern-react-thumb.jpg'


const Header: React.FC<IHeaderProps> = (props) => {
    const {  isLoggedIn,routeName,searchQuery,isHome, isProfile, logout, cartItems} = props;    
    const history = useHistory();
    const [nav, setNav] = useState(false);
    const [navBright, setNavBright] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleSearchChange = (value) => {
        // if (value?.length > 2 && history.location.pathname !== "/search") {
        //     history.push('/search')
        // }
        // if(changeSearch) changeSearch(value);
    };

    const handleLogout = ()=>{
        logout();
    }
    // const route = window.location.pathname
    // console.log('windowRouteName', route);
    useEffect(()=>{
        console.log('headerCalled', history.location.pathname)
        history.location.pathname
    }, [history.location.pathname.length])
    const isLinkActive = (route) => {
        return routeName === route ? "active" : '';
    };
    // const handleMouseEnter = ()=>{
    //     // console.log(onmouseenter)
    //     alert('onmouseenter')
    // }
    useEffect(() => {
        if(cartItems ){
            let total = cartItems.reduce((a, b) => {
               return  a + b.price
            }, 0);
            setTotalPrice(total)
        }
    }, [cartItems&&cartItems.length]); 

    return (
        <>
            <header className={`header ${history.location.pathname === '/' && ''} ${!isHome ? 'header--bright' : 'header--default'} ${isHome && nav ? 'active' : ''} ${!isHome && navBright ? 'active' : ''} ${isProfile ? 'header--gray' : ''}  ${isLoggedIn ? 'header--logged-in' : ''}`}>     
                <div className="header--flex -one">
                    <Link to='/' className='header__logo'>
                        <img src={Logo} alt="Logo" height={18} onClick={() => setNav(false)}/>
                    </Link>
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
                                <MenuItem value='Instructors' to="/teachers" className={isLinkActive('/teachers')}/>
                            </li>
                            <li >
                                {/* <MenuItem value='Teach on Educamp' to="/teach" className={isLinkActive('/teach')}/> */}
                                <Dropdown type="primary" icon={<MenuItem value='Teach on Educamp' to="/teach" className={isLinkActive('/teach')}/> }>
                                    <div className="dropdown-items">Turn what you know into an opportunity and reach millions around the world.</div>
                                </Dropdown>
                            </li>
                            <li  className={!isLoggedIn ? 'not-logged-in' : ''}>
                                {
                                !isLoggedIn &&
                                <>
                                    <Dropdown type="cart" icon={<IconBtn badge={2} className="user--cart" type="cart"  to="/cart"/>}>
                                        <div className="cart-items">Your is Empty</div>
                                    </Dropdown>
                                    {/* <IconBtn to="/cart" onMouseEnter={handleMouseEnter} className="user--cart" type="cart"/> */}
                                    <Button value='Sign In' actionType='login' type='primary' to='/login'/> 
                                    <Button value='Sign Up' actionType='register' type='primary' to='/register'/> 
                                </>
                                }
                            </li>
                            {isLoggedIn &&
                            <> 
                                <Dropdown type="cart" icon={<IconBtn  className="user--cart" type="cart"  to="/cart"/>}>
                                    {cartItems && cartItems.length > 0 ? cartItems.map(item=>
                                        <Fragment key={item.id}>
                                        <div  className="cart-items">
                                            <img src={courseThumbnail} alt="course-item-img"/>
                                            <div className="item">
                                                <h4>{item.title}</h4>
                                                <p>Stephen Graider</p>
                                                <div className="item-price">${item.price}</div>
                                            </div>
                                        </div>
                                        </Fragment>
                                    ):
                                    <div className="cart-items">Your cart is Empty</div>
                                    
                                }
                                <div className="total-price">
                                    <h3>Total: ${totalPrice}</h3>
                                </div>
                                {/* route !== '/cart' && {<Link className="go-to-cart" to="/cart"> Go to Cart </Link>} this is not working */}
                                {<Link className="go-to-cart" to="/cart"> Go to Cart </Link>}
                                </Dropdown>
                                <Dropdown type="cart" icon={<IconBtn onClick={()=> alert("Your wishlist is empty!")} className="user--favourites" type="heart" />}>
                                    <div className="facourite-items">Your wishlist is Empty</div>
                                </Dropdown>
                                <Dropdown type="cart" icon={<IconBtn onClick={()=> alert("Your have no Notifications")} className="user--notifications" type="bell" />}>
                                    <div className="facourite-items">No notifications</div>
                                </Dropdown>
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
