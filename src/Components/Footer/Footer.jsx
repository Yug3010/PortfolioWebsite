import React from 'react';
import './Footer.css';
import footerlogo from '../../assets/yuglogo.svg';
import userIcon from '../../assets/user_icon.svg';

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footerlogo} alt="Footer Logo" className="footer-logo" />
                    <p>I am Yug Sutariya from , Canada with 3+ years of academic experience in field of IT and 4 months of internship experience as Fullstack developer . </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input type="email" placeholder='Enter your email'/>
                        <img src={userIcon} alt="User Icon" className="user-icon" />
                    </div>
                    <button className="footer-subscribe">
                        Subscribe
                    </button>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
