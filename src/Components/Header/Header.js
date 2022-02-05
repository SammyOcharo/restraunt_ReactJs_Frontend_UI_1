import React from 'react';
import "./Header.css";
import SubHeading from '../SubHeading/SubHeading';
import { images } from '../../constants';

function Header() {
    return (
        <div className="app__header app__wrapper section__padding" id='home'>
            <div className="app__wrapper_info">
                <SubHeading title="Chase the New Flavour" />
                <h1 className='app__header_h1'>The Key Fine Dine</h1>
                <p className="p__opensans" style={{ margin: '2rem 0' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates illo quod, atque vel vitae eius ullam soluta placeat porro. </p>
                <button type='button' className="custom__button">Explore Menu</button>
            </div>
            <div className="app__wrapper__image">
                <img src={images.welcome} alt="welcome" />
            </div>
        </div>
    )
}

export default Header;
