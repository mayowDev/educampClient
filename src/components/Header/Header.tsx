import React, {useEffect, useState, Fragment} from 'react';
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../assets/images/EducampLogo.png'
import SearchResult from '../SearchResult'
import MenuItem from '../MenuItem';
import Button from '../Button';
import IconBtn from '../IconBtn';
import Dropdown from '../Dropdown';
import  courseThumbnail  from '../../assets/images/coursesThumbnails/modern-react-thumb.jpg'

const Header = (props) => {
    const {isLoading, routeName,searchQuery,isHome, userProfile, logout, cartItems, favouriteItems, addToCart, removeFromWishlist, searchCourse} = props;    
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRequestCanceled, setIsRequestCanceled]= useState<boolean>(false)
    const [isUserLeft, setIsUserLeft] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResponse, setSearchResponse] = useState<any>('')
    const [totalPrice, setTotalPrice] = useState(0);
   
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
        setIsUserLeft(false)
    }
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
    const handleOnSearchItemClick = (route) => {
        history.push(route)
        setSearchResponse(''); 
        setSearchTerm('')

    }
    useEffect(() => {
        const fetchCourses = async ()=> {
            let response = await searchCourse(searchTerm.trim())
            setSearchResponse(response&&response.payload)
        }
        if(searchTerm&&searchTerm.trim().length > 2  && isRequestCanceled == false){
            const delayDebounceFn = setTimeout(() => {
                fetchCourses()
              }, 1000)
              return () => clearTimeout(delayDebounceFn)
        }
    },[searchTerm&&searchTerm.trim().length])
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
    useEffect(() => {        
        if(isUserLeft === true){
            const delayDebounceFn = setTimeout(() => {
                setSearchResponse(''); setSearchTerm('')
              }, 50)
              return () => clearTimeout(delayDebounceFn)
        }

    },[isUserLeft])
    // if(isLoading) return <Spinner type="cover"/>
    return (
        <>
            <header className={`header ${!isHome ? 'header--bright' : 'header--default'}  ${isAuthenticated ? 'header--logged-in' : ''}`}>     
                <div className="header--flex -one">
                    <Link to='/' className='header__logo'>
                        <img width={120} src={Logo} alt="Logo" height={18}/>
                    </Link>
                    <MenuItem value=" Categories" to="/categories"/>
                    <label
                        className={`search_bar `}>
                         <input 
                            autoFocus
                            type='text'
                            autoComplete='off'
                            onBlur={()=>{setIsUserLeft(true)}}                                
                            // onBlur={()=>{setSearchResponse(''); setSearchTerm('')}}                                
                            onKeyDown={({ nativeEvent }) => {nativeEvent.key === 'Backspace' ? setIsRequestCanceled(true) : setIsRequestCanceled(false) }}
                            onChange={handleSearchChange} value={searchTerm} placeholder="What do you want to learn?" 
                        />
                    </label>
                    {searchResponse&&searchResponse.length>0&&
                    <div className="courses__hero--search-result header__search-result">
                        {searchResponse&&searchResponse.length>0&&searchResponse.map((({title, slug}, idx)=>{
                            return(
                                <SearchResult onClick={()=>handleOnSearchItemClick(`/courses/${slug}`)} url={`courses/${slug}`} title={title} id={idx}/>
                            )
                        }))
                        }
                    </div>
                    }
                </div>
                <div className="header--flex">
                    <nav className='header__nav'>
                        <ul>
                            <li ><MenuItem value='Instructors' to="/teachers" className={isLinkActive('/teachers')}/></li>
                            <li ><MenuItem value='Teach on Educamp' to="/teacher-landing" className={isLinkActive('/teacher-landing')}/></li>
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
                                        <Link to={userProfile?.role==='teacher' ? "/teacher-profile": "/profile"}>My Profile</Link>
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
