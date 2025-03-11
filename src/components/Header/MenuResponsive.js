import React, { useState } from "react";
import "./HeaderResponsive.css";

import Asian from '../../assets/images/menu/asian.png';
import Beverage from '../../assets/images/menu/Beverage.png';
import Dessert from '../../assets/images/menu/Dessert.png';
import Diet from '../../assets/images/menu/diet.png';
import Fastfood from '../../assets/images/menu/fastfood.png';
import Homemade from '../../assets/images/menu/homemade.png';
import Italian from '../../assets/images/menu/italian.png';
import Persian from '../../assets/images/menu/persian.png';
import Seefood from '../../assets/images/menu/seefood.png';
import Vegetarian from '../../assets/images/menu/Vegetarian.png';


const menus = [
    { id: 1, title: 'Fast Food', image: Fastfood },
    { id: 2, title: 'Seafood', image: Seefood },
    { id: 3, title: 'Persian Cuisine', image: Persian },
    { id: 4, title: 'Italian Cuisine', image: Italian },
    { id: 5, title: 'Asian Cuisine', image: Asian },
    { id: 6, title: 'Vegetarian Foods', image: Vegetarian },
    { id: 7, title: 'Diet Foods', image: Diet },
    { id: 8, title: 'Homemade Dishes', image: Homemade },
    { id: 9, title: 'Desserts', image: Dessert },
    { id: 10, title: 'Beverages', image: Beverage },
];

// Mock Data برای زیرمجموعه‌ها (Subcategories)
const subcategories = [
    { id: 1, menuId: 1, name: 'Pizza', link: '#' },
    { id: 2, menuId: 1, name: 'Sandwich', link: '#' },
    { id: 3, menuId: 1, name: 'Burger', link: '#' },
    { id: 4, menuId: 1, name: 'Hot Dog', link: '#' },
    { id: 5, menuId: 2, name: 'Fish', link: '#' },
    { id: 6, menuId: 2, name: 'Shrimp', link: '#' },
    { id: 7, menuId: 3, name: 'Kebab', link: '#' },
];

// Mock Data برای زیرزیرمجموعه‌ها (Sub-Subcategories)
const subSubcategories = [
    { id: 1, subcategoryId: 1, name: 'Margarita', link: '#' },
    { id: 2, subcategoryId: 1, name: 'Chigaco', link: '#' },
    { id: 3, subcategoryId: 1, name: 'Peperoni', link: '#' },
    { id: 4, subcategoryId: 4, name: 'Beirisch', link: '#' },
    { id: 5, subcategoryId: 4, name: 'Extra hot', link: '#' },
];


const MenuResponsive = () => {
    const [isOpen, setIsOpen] = useState(false); // کنترل باز و بسته شدن Drawer
    const [activeMenu, setActiveMenu] = useState(null); // ذخیره دسته فعال
    const [activeSubcategory, setActiveSubcategory] = useState(null); // ذخیره زیرمجموعه فعال
  
    const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState);
    };
  
    const closeDrawer = () => {
      setIsOpen(false);
      setActiveMenu(null);
      setActiveSubcategory(null);
    };
  
    return (
      <>
        {/* دکمه باز کردن Drawer */}
        <div className="c-header_menu" onClick={toggleDrawer}></div>
  
        {/* Overlay */}
        {isOpen && <div className="drawer-overlay" onClick={closeDrawer}></div>}
  
        {/* Drawer */}
        <div className={`drawer ${isOpen ? "open" : ""}`}>
          <div className="drawer-header">
            <button className="close-btn" onClick={closeDrawer}>
              ✖
            </button>
          </div>
          <div className="drawer-content">
            {/* لیست دسته‌های اصلی */}
            <ul className="menu-list">
              {menus.map((menu) => (
                <li
                  key={menu.id}
                  className={`menu-item ${activeMenu === menu.id ? "active" : ""}`}
                  onClick={() =>
                    setActiveMenu(activeMenu === menu.id ? null : menu.id)
                  }
                >
                  {menu.title}
                  {/* نمایش زیرمجموعه‌ها */}
                  {activeMenu === menu.id && (
                    <ul className="submenu-list">
                      {subcategories
                        .filter((sub) => sub.menuId === menu.id)
                        .map((sub) => (
                          <li
                            key={sub.id}
                            className={`submenu-item ${
                              activeSubcategory === sub.id ? "active" : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation(); // جلوگیری از بسته شدن دسته اصلی
                              setActiveSubcategory(
                                activeSubcategory === sub.id ? null : sub.id
                              );
                            }}
                          >
                            {sub.name}
                            {/* نمایش زیرزیرمجموعه‌ها */}
                            {activeSubcategory === sub.id && (
                              <ul className="subsubmenu-list">
                                {subSubcategories
                                  .filter(
                                    (subSub) => subSub.subcategoryId === sub.id
                                  )
                                  .map((subSub) => (
                                    <li key={subSub.id} className="subsubmenu-item">
                                      {subSub.name}
                                    </li>
                                  ))}
                              </ul>
                            )}
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default MenuResponsive;