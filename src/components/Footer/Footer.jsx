import React from 'react'
import './Footer.css'
import facebook_icon from '../../assets/facebook_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={youtube_icon} alt="" />
                <img src={facebook_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={twitter_icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Copy rights policy</li>
                <li>Terms & Conditions</li>
                <li>Help Center</li>
                <li>Cookies Setup</li>
                <li>Terms & Conditions</li>
                <li>FAQ</li>
                <li>Cookies Setup</li>
                <li>Copy rights policy</li>
                <li>Contact Us</li>
            </ul>
            <p className='copyright-text'>© 2025 Netflix Inc. All rights reserved.</p>
        </div>
    )
}

export default Footer