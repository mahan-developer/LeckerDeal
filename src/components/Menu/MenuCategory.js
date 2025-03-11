import React, { useState } from 'react';
import SubCategoryList from './SubCategoryList';

const MenuCategory = ({ menu, subcategories, subSubcategories, isActive, shouldAnimate, onMouseEnter, onMouseLeave }) => {
    return (
        <li
            className={`c-topmenu_list-li ${isActive ? 'show-menu' : ''} ${
                shouldAnimate ? 'animate-menu' : ''
            }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <a className="c-topmenu_list-a">{menu.title}</a>
            <div className={`c-topmenu_sublist ${shouldAnimate ? 'with-animation' : ''}`}>
                <div className="c-topmenu_sublist-menulist">
                    <SubCategoryList
                        subcategories={subcategories}
                        subSubcategories={subSubcategories}
                    />
                </div>
                {menu.image && (
                    <div className="c-topmenu_sublist-img">
                        <a href="#" className="c-topmenu_sublist-img-a">
                            <img src={menu.image} alt={menu.title} />
                        </a>
                    </div>
                )}
            </div>
        </li>
    );
};

export default MenuCategory;
