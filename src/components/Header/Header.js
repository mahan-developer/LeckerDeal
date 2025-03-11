import React, { useState } from 'react';
import './Header.css';
import './HeaderResponsive.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';
import UserMenu from './UserMenu';
import CartDropdown from './CartDropdown';
import Menu from '../Menu/Menu';
import MenuResponsive from './MenuResponsive';

const Header = () => {

    const [activeDropdown, setActiveDropdown] = useState(null);
    const isAnyDropdownActive = activeDropdown !== null;

    return (
        <header className="c-header">
            <div className="container">
                <div className="c-header_row">
                    
                    <Logo />         

                    <SearchBar activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/>                                       

                    <div className="c-header_action">

                        <LanguageSelector activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />

                        <div className="divider"></div>

                        <UserMenu activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />

                        <div className="divider"></div>

                        <CartDropdown activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
                        
                    </div>
                    <MenuResponsive/>
                </div>
        
            </div>
            <div className={`c-cover ${isAnyDropdownActive ? 'is-active' : ''}`}></div>

            <Menu />
        </header>
    );



};

export default Header;



























/* import React, { useState } from 'react';
import './Header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';
import UserMenu from './UserMenu';
import CartDropdown from './CartDropdown';




const Header = () => {



    const [activeDropdown, setActiveDropdown] = useState(null);


    const handleDropdownToggle = (dropdown) => {
        setActiveDropdown((prev) => (prev === dropdown ? null : dropdown)); // باز و بسته کردن
    };


    // استیت‌ها برای مدیریت نمایش جستجو و Dropdown

    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // ذخیره متن ورودی
    const [searchResults, setSearchResults] = useState([]); // ذخیره نتایج جستجو
    const [languageDropdownActive, setLanguageDropdownActive] = useState(false);
    const [userDropdownActive, setUserDropdownActive] = useState(false); // کنترل نمایش Dropdown کاربر
    const [searchDropdownActive, setSearchDropdownActive] = useState(false);
    const mockData = ['laptop', 'shoes', 'vitamin', 'pamper', 'mobile', 'refrigerator', 'tv']; 
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const isAnyDropdownActive = userDropdownActive || languageDropdownActive || searchDropdownActive;


    

    return (
        <header className="c-header">
            <div className="container">
                <div className="c-header_row">
                    
                    <Logo />         

                    <SearchBar mockData={mockData} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/>                                       

                    <div className="c-header_action">

                        <LanguageSelector activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />

                        <div className="divider"></div>


                        <UserMenu activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />

                        <div className="divider"></div>

                        <CartDropdown activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />

                    </div>
                </div>
            </div>
            <div className={`c-cover ${isAnyDropdownActive ? 'is-active' : ''}`}></div>
        </header>
    );
};

export default Header;
 */