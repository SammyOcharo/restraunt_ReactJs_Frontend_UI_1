import React from 'react';
import './SpecialMenu.css'
import { data, images } from '../../constants';
import SubHeading from '../SubHeading/SubHeading';
import MenuItem from '../MenuItem/MenuItem';

function SpecialMenu() {
    return (
        <div className="app__sectionMenu flex__center section__padding" id="menu">
            <div className="app__specialmenu-title">
                <SubHeading title="Menu that fits your palette" />
                <h1 className="headtext__cormorant">Today's Special</h1>
            </div>
            <div className="app__specialmenu-menu">
                <div className="app__specialmenu-menu_wine flex__center">
                    <p className='app__specialmenu_menu_heading'>Wine & Beer</p>
                    <div className="app__specialmenu_menu_specials">
                        {data.wines.map((wine, index) => (

                            <MenuItem key={wine.title + index} price={wine.price} title={wine.title} tags={wine.tags} />
                        ))}
                    </div>
                </div>
                <div className="app__specialmenu-menu-img">
                    <img src={images.menu} alt="" />
                </div>
                <div className="app__specialmenu-menu_cocktails flex__center">
                    <p className='app__specialmenu_menu_heading'>Cocktails</p>
                    <div className="app__specialmenu_menu_specials">
                        {data.cocktails.map((cocktail, index) => (
                            <MenuItem key={cocktail.title + index} price={cocktail.price} title={cocktail.title} tags={cocktail.tags} />

                        ))}
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '15px' }}>
                <button type='button' className='custom__button'> More </button>
            </div>
        </div>
    )
}

export default SpecialMenu;
