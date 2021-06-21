import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/udemy-logo-coral.svg';
import { P1 } from '../Typography';

const Footer = () => {
    const displayDate = ()=>{ return new Date().getFullYear()}
    return (
        <footer className="footer">
            <div className="footer__nav">
                <nav className="first-nav">
                    <ul>
                        <Link to='/teach'><P1 value="Teach on Educamp" /></Link>
                        <Link to='#'><P1 value="Get the app" /></Link>
                        <Link to='/about'><P1 value="About us" /></Link>
                        <Link to='/contact'><P1 value="Contact Us" /></Link>
                    </ul>
                    <ul>
                        <Link to='/careers'><P1 value="Careers" /></Link>
                        <Link to='/customer-support'><P1 value="Help & Support" /></Link>
                        <Link to='/blog'><P1 value="Blog" /></Link>
                        <Link to='/affiliate'><P1 value="Affiliate" /></Link>
                    </ul>
                    <ul>
                        <Link to='/teach'><P1 value="Terms" /></Link>
                        <Link to='/privacy-police'><P1 value="Privacy and Policy" /></Link>
                        <Link to='/sitemap'><P1 value="Sitemap" /></Link>
                    </ul>
                </nav>
                <button>English</button>
            </div>
            <div >
                <Link to='/' className="footer__logo"><img width={100} height={39} src={Logo} alt={Logo} /></Link>
                <P1 value={`© ${displayDate()} Educamp. Inc`} />
            </div>
        </footer>
    )
};

export default Footer
