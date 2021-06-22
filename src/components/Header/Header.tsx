import React, {useEffect, useState, Fragment} from 'react';
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../assets/images/udemy-logo-coral.svg';
// import {IHeaderProps} from './types';
import MenuItem from '../MenuItem';
import Button from '../Button';
import IconBtn from '../IconBtn';
import Dropdown from '../Dropdown';
import  courseThumbnail  from '../../assets/images/coursesThumbnails/modern-react-thumb.jpg'
import Spinner from '../../components/Spinner'

const Header = (props) => {
    const {isLoading, routeName,searchQuery,isHome, userProfile, logout, cartItems, favouriteItems, addToCart, removeFromWishlist} = props;    
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const handleSearchChange = (value) => {
        // if (value?.length > 2 && history.location.pathname !== "/search") {
        //     history.push('/search')
        // }
        // if(changeSearch) changeSearch(value);
    };

    const handleLogout = ()=>{
        logout(); setTimeout(()=>{window.location.href="/"},100)
    }
    const handleAddToCart =  async (courseid) => {
        await addToCart({courseid})
        await removeFromWishlist(courseid)
    }
    const isLinkActive = (route) => {
        return routeName === route ? "active" : '';
    };
    useEffect(() => {
        if(userProfile&& userProfile.id){
            setIsAuthenticated(true)
        }
    }, [userProfile&&userProfile.id]); 
    useEffect(() => {
        if(cartItems ){
            let total = cartItems.reduce((a, b) => {
               return  a + b.price
            }, 0);
            setTotalPrice(total)
        }
    }, [cartItems&&cartItems.length]); 
    // if(isLoading) return <Spinner type="cover"/>
    return (
        <>
            <header className={`header ${!isHome ? 'header--bright' : 'header--default'}  ${isAuthenticated ? 'header--logged-in' : ''}`}>     
                <div className="header--flex -one">
                    <Link to='/' className='header__logo'>
                        <img src={Logo} alt="Logo" height={18}/>
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
                                <MenuItem value='Instructors' to="/teachers" className={isLinkActive('/teachers')}/>
                            </li>
                            <li >
                                <Dropdown type="primary" icon={<MenuItem value='Teach on Educamp' to="/teach" className={isLinkActive('/teach')}/> }>
                                    <div className="dropdown-items">Turn what you know into an opportunity and reach millions around the world.</div>
                                </Dropdown>
                            </li>
                            <li  className={!isAuthenticated ? 'not-logged-in' : ''}>
                                {
                                !isAuthenticated &&
                                <>
                                    <Dropdown type="cart" icon={<IconBtn badge={cartItems && cartItems.length} className="user--cart" type="cart"  to="/cart"/>}>
                                        <div className="cart-items">Your is Empty</div>
                                    </Dropdown>
                                    <Button value='Sign In' actionType='login' type='primary' to='/login'/> 
                                    <Button value='Sign Up' actionType='register' type='primary' to='/register'/> 
                                </>
                                }
                            </li>
                            {isAuthenticated &&
                            <> 
                                <Dropdown type="cart" icon={<IconBtn badge={cartItems && cartItems.length} className="user--cart" type="cart"  to="/cart"/>}>
                                    {cartItems && cartItems.length > 0 ? cartItems.map(item=>
                                        <Fragment key={item.id}>
                                        <div  className="cart-items" onClick={()=>history.push(`/courses/${item.slug}`)}>
                                            <img src={courseThumbnail} alt="course-item-img"/>
                                            <div className="item">
                                                <h4>{item.title}</h4>
                                                <p>{item.createdBy}</p>
                                                <div className="item-price">${item.price}</div>
                                            </div>
                                        </div>
                                        </Fragment>
                                    ):
                                    <div className="cart-items">Your cart is Empty</div>
                                }
                                {cartItems && cartItems.length > 0 &&
                                <>
                                    <div className="total-price">
                                        <h3>Total: ${totalPrice}</h3>
                                    </div>
                                    <Link className="go-to-cart" to="/cart"> Go to Cart </Link>
                                </>
                                }
                                </Dropdown>
                                <Dropdown type="cart" icon={<IconBtn onClick={()=> history.push('/favourites')} className="user--favourites" type="heart" />}>
                                    {favouriteItems && favouriteItems.length> 0 ? favouriteItems.map((item):any=>{
                                        return (
                                            <Fragment key={item.id}>
                                                <div  className="favourite-items" onClick={()=>history.push(`/courses/${item.slug}`)}>
                                                    <img src={courseThumbnail} alt="course-item-img"/>
                                                    <div className="item">
                                                        <h4>{item.title}</h4>
                                                        <p>{item.createdBy}</p>
                                                        <div className="item-price">${item.price}</div>
                                                    </div>
                                                </div>
                                                <Link onClick={() =>handleAddToCart(item.id)} className="go-to-cart" to="/cart"> Add to Cart </Link>
                                        </Fragment>
                                        )  
                                    }):
                                    <div className="favourite-items">Your wishlist is Empty</div>
                                }

                                </Dropdown>
                                <Dropdown type="cart" icon={<IconBtn onClick={()=> alert("Your have no Notifications")} className="user--notifications" type="bell" />}>
                                    <div className="facourite-items">No notifications</div>
                                </Dropdown>
                                <li  className={!isAuthenticated ? 'not-logged-in' : 'logged-in'}>
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
                </div>
            </header>
        </>
    )
};

export default Header
