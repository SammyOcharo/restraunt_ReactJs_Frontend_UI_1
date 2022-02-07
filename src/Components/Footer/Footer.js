import React from 'react';
import './Footer.css'
import { images } from '../../constants'
import SubHeading from '../SubHeading/SubHeading';
import FooterOverlay from '../FooterOverlay/FooterOverlay';
import Newsletter from '../Newsletter/Newsletter';

import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

function Footer() {
    return (
        <div className="app__footer section__padding">
            <FooterOverlay />
            <Newsletter />
            <div className="app__footer-links">
                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Contact Us</h1>
                    <p className="p__opensans">Thika Road off Roysambu Kamiti Road</p>
                    <p className="p__opensans"> +254795941990</p>
                    <p className="p__opensans"> +254755865545</p>
                </div>
                <div className="app__footer-links_logo">
                    <img src={images.gericht} alt="" />
                    <p className="p__opensans">The best way to thrive is to work on your skill</p>
                    <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marinTop: '15' }} />
                    <div className="app__footer-links_icons">
                        <FiFacebook />
                        <FiTwitter />
                        <FiInstagram />
                    </div>
                </div>
                <div className="app__footer-links_work">
                    <h1 className="app__footer-headtext">Working Hours</h1>
                    <p className="p__opensans">Monday-Friday: </p>
                    <p className="p__opensans">008.00 am - 07.00 pm</p>
                    <p className="p__opensans">Saturday- Sunday</p>
                    <p className="p__opensans">08.00 am - 12.00 pm</p>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="p__opensans">2021 Gericht. All Rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;
