import React from 'react';
import { images } from '../../constants'
import SubHeading from '../SubHeading/SubHeading';
function Find() {
    return (
        <div className="app__bg app__wrapper section__padding" id='contact'>
            <div className="app__wrapper_info">
                <SubHeading title='Contact' />
                <h1 className='headtext__cormorant' style={{ marginBottom: '2rem' }}>Find us</h1>
                <div className="app__wrapper-content">
                    <p className="p__opensans"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, minus. </p>
                    <p className="p__cormorant" style={{ color: '#DCCA87', margin: '1rem 0' }}> Opening Hours </p>
                    <p className="p__opensans"> Mon-Fri: 10:00 am - 07.00 pm </p>
                    <p className="p__opensans"> Sat-Sun: 11.00 am - 05.00 pm </p>
                </div>
                <button className="custom__button" style={{ marginTop: '1rem' }}> Visit Us</button>
            </div>
            <div className="app__wrapper_img">
                <img src={images.findus} alt="" />
            </div>
        </div>
    )
}

export default Find;
