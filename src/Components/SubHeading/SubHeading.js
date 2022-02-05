import React from 'react';
import { images } from '../../constants'
function SubHeading({ title }) {
    return (
        <div>
            <p className="p__cormorant">{title}</p>
            <img src={images.spoon} alt="" />
        </div>
    )
}

export default SubHeading;
