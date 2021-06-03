import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Logo-small.png';

const Sidebar = () => {
    return (
        <div className="sidebar"><Link to="/"><img src={Logo} alt="geekcamp-logo"/></Link></div>
    )
}

export default Sidebar
