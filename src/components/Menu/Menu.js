import React, { useState } from 'react';
import './Menu.css';
import MenuCategory from './MenuCategory';
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
    { id: 2, title: 'Sea Food', image: Seefood },
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


const Menu = () => {
    const [activeMenu, setActiveMenu] = useState(null); // منوی فعال
    const [shouldAnimate, setShouldAnimate] = useState(false); // کنترل انیمیشن

    const handleMouseEnter = (menuId) => {
        if (activeMenu === null) {
            // انیمیشن فقط برای باز شدن اولیه
            setShouldAnimate(true);
        } else {
            // غیرفعال کردن انیمیشن هنگام جابه‌جایی
            setShouldAnimate(false);
        }
        setActiveMenu(menuId); // تنظیم منوی فعال
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
        setShouldAnimate(false); // بازنشانی انیمیشن
    };


    const [location, setLocation] = useState("Location"); // مقدار پیش‌فرض
    const [error, setError] = useState(null);

    const fetchLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude.toFixed(2); // محدود کردن اعشار
                    const longitude = position.coords.longitude.toFixed(2); // محدود کردن اعشار
                    setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
                },
                (error) => {
                    setError("Location not available");
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    };


    return (
        <nav className="c-header_nav">
            <div className="c-header_nav-line"></div>
            <div className="container">
                <div className="c-topmenu">
                    <ul className="c-topmenu_list">
                        <li>
                            <ul className="c-topmenu_list-categoris_items">
                                {menus.map((menu) => (
                                    <MenuCategory
                                        key={menu.id}
                                        menu={menu}
                                        subcategories={subcategories.filter(
                                            (subcategory) => subcategory.menuId === menu.id
                                        )}
                                        subSubcategories={subSubcategories}
                                        isActive={activeMenu === menu.id}
                                        shouldAnimate={shouldAnimate}
                                        onMouseEnter={() => handleMouseEnter(menu.id)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                ))}
                            </ul>
                        </li>
                        <li>
                            <ul className="c-topmenu_list-location">
                                <li>
                                    <a href="#" className="c-topmenu_list-a" onClick={fetchLocation}>
                                        {location}
                                    </a>
                                </li>
                                {error && <p>{error}</p>} {/* نمایش پیام خطا در صورت عدم موفقیت */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
