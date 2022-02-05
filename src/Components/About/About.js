import React from 'react';
import './About.css'
import { images } from '../../constants';
function About() {
    return (
        <div className="app__aboutus app__bg flex__center section__padding" id='about'>
            <div className="app__about-overlay flex__center">
                <img src={images.G} alt="G letter" />
            </div>
            <div className="app__aboutus-content flex__center">
                <div className="app__about-content_about">
                    <h1 className='headtext__cormorant'>About us</h1>
                    <img className='spoon__img' src={images.spoon} alt="about_spoon" />
                    <p className="p__opensans"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nemo quia sapiente, suscipit dolorum accusantium ab aliquam nulla cumque quas! </p>
                    <button type='button' className="custom__button">know More</button>
                </div>
                <div className="app__aboutus-content_knife flex__center">
                    <img src={images.knife} alt="" />
                </div>
                <div className="app__about-content_history">
                    <h1 className='headtext__cormorant'>About us</h1>
                    <img className='spoon__img' src={images.spoon} alt="about_spoon" />
                    <p className="p__opensans"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nemo quia sapiente, suscipit dolorum accusantium ab aliquam nulla cumque quas! </p>
                    <button type='button' className="custom__button">know More</button>
                </div>
            </div>
        </div>
    )
}

export default About;
