import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/udemy-logo-coral.svg';
import { P1 } from '../Typography';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div>
                    <Link to='/' className="header__logo">
                        <img width={37} height={39} src={Logo} alt={Logo} />
                    </Link>
                    <nav className="footer-nav first-nav">
                        <ul>
                            <Link target="_blank" to='/about'>
                                <P1 value="About" />
                            </Link>
                            <Link target="_blank" to='https://instagram.com/'>
                                <P1 value="Instagram" />
                            </Link>
                            <Link target="_blank" to='/contact'>
                                <P1 value="Contact Us" />
                            </Link>
                            <Link target="_blank" to='/courses'>
                                <P1 value="Courses" />
                            </Link>
                            <Link target="_blank" to='#'>
                                <P1 value="Join our Mailing List" />
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="policies-wrapper">
                    <P1 value="This site uses cookies, please see our privacy policy." />
                    <P1 value="© 2021 Educamp Limited" />
                    <div className="flex">
                        <Link target="_blank" to='/privacy-notice'>
                            Privacy Policy
                        </Link>
                            &nbsp;
                            |
                            &nbsp;
                        <Link target="_blank" to='/terms-and-conditions/'>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer
