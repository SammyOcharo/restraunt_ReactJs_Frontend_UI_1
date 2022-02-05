import React from 'react';
import './Chef.css'
import { images } from '../../constants';
import SubHeading from '../SubHeading/SubHeading';

function Chef() {
    return (
        <div className="app__bg app__wrapper section__padding" id='chef'>
            <div className="app__wrapper_img app__wrapper_reverse">
                <img src={images.chef} alt="chef" />
            </div>
            <div className="app__wrapper_info">
                <SubHeading title="Chef's Word" className="subheading" />
                <h3 className="headtext__cormorant">What we believe in</h3>
                <div className="app__chef_content">
                    <div className="app__chef-content-quote">
                        <img src={images.quote} alt="quote" />
                        <p className="p__opensans"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae recusandae, qui repudiandae corrupti et quam quae provident culpa iusto labore? </p>
                    </div>
                    <p className="p__opensans"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur molestias veniam, doloremque quo corrupti nostrum sint quos assumenda officia expedita beatae eaque a nesciunt necessitatibus, ullam eos distinctio! Eligendi, nostrum. </p>
                </div>
                <div className="app__sign">
                    <p>Kevin</p>
                    <p className="p__opensans">Founder and owner</p>
                    <img src={images.sign} alt="sign" />
                </div>

            </div>
        </div>
    )
}

export default Chef;
