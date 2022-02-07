import React, { useRef } from 'react';
import './Gallery.css';
import { images } from '../../constants'
import SubHeading from '../SubHeading/SubHeading';

import { BsInstagram, BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
function Gallery() {

    const scrolRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrolRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;

        } else {
            current.scrollLeft += 300;

        }
    }
    const galleryimages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
    return (
        <div className="app__gallery flex__center">
            <div className="app__gallery-content">
                <SubHeading title="Instagram" />
                <h3 className="headtext__cormorant">
                    Photo Gallery
                </h3>
                <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis pariatur debitis incidunt libero voluptas asperiores veritatis labore dolorem accusantium culpa. </p>
                <button type='button' className='custom__button'>View More</button>
            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrolRef}>
                    {galleryimages.map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                            <img src={image} alt="" />
                            <BsInstagram className="gallery__images" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftSquareFill className='gallery__arrow-icon' onClick={() => scroll('left')} />
                    <BsArrowRightSquareFill className='gallery__arrow-icon' onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;
