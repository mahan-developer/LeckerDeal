import React, { useRef, useEffect } from 'react';

const UserMenu = ({ activeDropdown, setActiveDropdown }) => {
    const userRef = useRef(null);

    // مدیریت کلیک خارج از Dropdown
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (userRef.current && !userRef.current.contains(event.target)) {
                if (activeDropdown === 'user') {
                    setActiveDropdown(null); // بستن منوی کاربر اگر باز است
                }
            }
        };

        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [activeDropdown, setActiveDropdown]);

    const toggleDropdown = () => {
        setActiveDropdown((prev) => (prev === 'user' ? null : 'user')); // تغییر وضعیت منو
    };

    const isDropdownActive = activeDropdown === 'user'; // بررسی فعال بودن منوی کاربر

    return (
        <>
            {isDropdownActive && <div className="c-cover is-active" onClick={() => setActiveDropdown(null)}></div>}
            <div className="c-header_action-login" ref={userRef}>
                <a
                    className="c-header_btn-user"
                    onClick={toggleDropdown}
                >
                    <span >Login&nbsp;&nbsp;/&nbsp;&nbsp;Register</span>
                </a>
                <div className={`c-header_user-dropdown ${isDropdownActive ? 'is-active' : ''}`}>
                    <a className="c-header_user-dropdown_login">Login to Lunarmart</a>
                    <div className="c-header_user-dropdown_signup">
                        <span>Are you new user?&nbsp;&nbsp;</span><a>Register</a>
                    </div>
                    <a className="c-header_user-dropdown_action c-header_user-profile">Profile</a>
                    <a className="c-header_user-dropdown_action c-header_user-order">Order Tracking</a>
                </div>
            </div>
        </>
    );
};

export default UserMenu;
