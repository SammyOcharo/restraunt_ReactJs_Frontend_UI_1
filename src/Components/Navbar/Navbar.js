import React, { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from '../../constants/images'
import './Navbar.css'

function Navbar() {
    const [Toggle, setToggle] = useState(false);
    return (
        <div className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.gericht} alt="" />
            </div>
            <ul className='app__navbr-links'>
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#awards">Awards</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
            <div className="app__login">
                <a href="#login" className='p__opensans'>Login</a>
                <div />
                <a href="/" className='p__opensans'>Book Table</a>
            </div>
            <div className="app__navbar-smallscreen">
                <AiOutlineBars color="#fff" className='bars' font="29" onClick={() => {
                    setToggle(true)
                }} />

                {Toggle && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggle(false)} />
                        <ul className='app__navbr-smallscreen-links'>
                            <li className="p__opensans"><a href="#home">Home</a></li>
                            <li className="p__opensans"><a href="#about">About</a></li>
                            <li className="p__opensans"><a href="#menu">Menu</a></li>
                            <li className="p__opensans"><a href="#awards">Awards</a></li>
                            <li className="p__opensans"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar;
