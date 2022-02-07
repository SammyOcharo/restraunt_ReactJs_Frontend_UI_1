import React from 'react';
import './Laurels.css'
import { data, images } from '../../constants'
import SubHeading from '../SubHeading/SubHeading';
function Laurels() {

    const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
        <div className="app__laurels_awards-card">
            <img src={imgUrl} alt="" />
            <div className="app__laurels_awards-card_content">
                <p className="p__cormorant" style={{ color: '#DCCA87' }}> {title}</p>
                <p className="p__cormorant"> {subtitle}</p>

            </div>
        </div>
    )
    return (
        <div className="app__bg app__wrapper section__padding" id="awards">
            <div className="app__wrapper_info">
                <SubHeading title="Awards and Recognition" />
                <h3 className="headtext__cormorant">Our Laurels</h3>
                <div className="app__laurels-awards">
                    {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
                </div>
            </div>
            <div className="app__wrapper_img">
                <img src={images.laurels} alt="" />
            </div>
        </div>
    )
}

export default Laurels;
