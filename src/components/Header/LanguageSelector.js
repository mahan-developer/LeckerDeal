import React, { useRef, useEffect } from 'react';

const LanguageSelector = ({ activeDropdown, setActiveDropdown }) => {
    const languageRef = useRef(null);
    const [selectedLanguage, setSelectedLanguage] = React.useState('EN'); // زبان پیش‌فرض

    // مدیریت کلیک خارج از Dropdown
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                if (activeDropdown === 'language') {
                    setActiveDropdown(null); // بستن منوی زبان اگر باز است
                }
            }
        };

        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [activeDropdown, setActiveDropdown]);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language); // ذخیره زبان انتخابی
        setActiveDropdown(null); // بستن منو پس از انتخاب
    };

    const toggleDropdown = () => {
        setActiveDropdown((prev) => (prev === 'language' ? null : 'language')); // تغییر وضعیت dropdown
    };

    const isDropdownActive = activeDropdown === 'language'; // بررسی فعال بودن dropdown

    return (
        <>
            {isDropdownActive && <div className="c-cover is-active" onClick={() => setActiveDropdown(null)}></div>}
            <div className="c-header_action-Language" ref={languageRef}>
                <a
                    href="#"
                    className="c-header_language-list"
                    onClick={toggleDropdown}
                >
                    {selectedLanguage}
                </a>
                <div className={`c-header_language-dropdown ${isDropdownActive ? 'is-active' : ''}`}>
                    <div className="c-header_language-dropdown_list">
                        <span
                            className={`c-header_language-select ${selectedLanguage === 'EN' ? 'is-active' : ''}`}
                            onClick={() => handleLanguageChange('EN')}
                        >
                            English - EN
                        </span>
                        <span
                            className={`c-header_language-select ${selectedLanguage === 'DE' ? 'is-active' : ''}`}
                            onClick={() => handleLanguageChange('DE')}
                        >
                            Deutsch - DE
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LanguageSelector;
