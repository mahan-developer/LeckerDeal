import React, { useState, useRef} from 'react';
import Doner from '../../assets/images/products/restaurant_1/Doner.jpg';
import Margarita from '../../assets/images/products/restaurant_1/Margarita.jpg';
import cheesecake from '../../assets/images/products/restaurant_1/cheesecake.jpg';



const CartDropdown = ({ activeDropdown, setActiveDropdown }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Spetial Doner',
            price: 6,
            quantity: 1,
            image: Doner,
        },
        {
            id: 2,
            name: 'Pizza Margarita family',
            price: 12,
            quantity: 2,
            image: Margarita,
        },
        {
            id: 3,
            name: 'Cheesecake',
            price: 7.2,
            quantity: 1,
            image: cheesecake,
        },
    ]);


    const handleQuantityChange = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };


    const cartRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleMouseEnter = () => {
        if (window.innerWidth > 1200) 
        {
            if (cartItems.length > 0) {
                setActiveDropdown('basket'); // تنظیم dropdown به basket
            }

            if (cartRef.current) {
                const rect = cartRef.current.getBoundingClientRect(); // دریافت مختصات و ابعاد            
            }
        }
};
    
   
    const handleMouseLeave = () => {
        if (cartRef.current) 
        {
            const rect = cartRef.current.getBoundingClientRect(); // مختصات عنصر
            const { clientX, clientY } = event; // مختصات ماوس
    
            // ایجاد محدوده گسترش‌یافته
            const extendedBottom = rect.bottom + 20; // افزودن 20 پیکسل به پایین
    
            // بررسی اگر ماوس همچنان در محدوده گسترش‌یافته باشد
            if (
                clientX >= rect.left &&
                clientX <= rect.right &&
                clientY >= rect.top &&
                clientY <= extendedBottom
            ) {
                return; // اگر ماوس در محدوده است، منو بسته نشود
            }
            if (activeDropdown === 'basket') {
                setActiveDropdown(null); // غیرفعال کردن بسکت
            }
        }
        
    };

    const handleClick = (event) => {
        if (window.innerWidth <= 1200) {
            if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
                // اگر کلیک داخل زیرمنو بود، هیچ کاری نکن
                return;
            }
            setActiveDropdown((prev) => (prev === 'basket' ? null : 'basket'));
        }
    };

    const isBasketOpen = activeDropdown === 'basket'; // بررسی فعال بودن بسکت


    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    

    return (
        <div
            className="c-header_action-cart" ref={cartRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            
        >
            <a className="c-header_btn-cart" data-counter={totalItems}>
                <span data-counter={totalItems}>&nbsp;&nbsp;Basket&nbsp;&nbsp;</span>
            </a>
            {isBasketOpen && (
                <div className="c-header_basket-dropdown" ref={dropdownRef}>
                    <ul className="c-header_basket-list">
                        {cartItems.map((item) => (
                            <li className="c-basket_item" key={item.id}>
                                <div className="c-basket_item-row c-basket_item-row-info">
                                    <div className="c-basket_col c-basket_col-thumb">
                                        <a href="#">
                                            <img src={item.image} alt={item.name} />
                                        </a>
                                    </div>
                                    <div className="c-basket_col c-basket_col-desciption">
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                                <div className="c-basket_item-row c-basket_item-row-coutAndprice">
                                    <div className="c-basket_col c-basket_col-count">
                                        <div className="c-basket_qnty">
                                        <button
                                            className="c-basket_btn-decrease"
                                            onClick={() => {
                                                if (item.quantity > 1) {
                                                    handleQuantityChange(item.id, -1);
                                                } else {
                                                    // حذف آیتم از سبد
                                                    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
                                                }
                                            }}
                                        >
                                            <i className={item.quantity === 1 ? "icon-trash" : "icon-minus"}></i>
                                        </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                className="c-basket_btn-increase"
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                            >
                                                <i className="icon-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="c-basket_col c-basket_col-price">
                                        <span>{item.price * item.quantity} Euro</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="c-basket_register-row">
                        <div className="c-basket_col c-basket_col-btn">
                            <button className="c-basket_button">Place order</button>
                        </div>
                        <div className="c-basket_col c-basket_col-totalprice">
                            Total amount: {totalPrice} Euro
                        </div>
                    </div>
                </div>
            )}
        </div>


    );
};

export default CartDropdown;



