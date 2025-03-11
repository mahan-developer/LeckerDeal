import React, { useState, useRef, useEffect } from 'react';

    const SearchBar = ({  activeDropdown, setActiveDropdown }) => {
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);
    const inputRef = useRef(null); // مرجع ورودی جستجو

    const mockData = ['Pizza', 'Peperoni', 'Bear', 'Doner', 'Kebab', 'Schnizel', 'Vegterisch']; 

    // مدیریت کلیک خارج از Dropdown
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                if (activeDropdown === 'search') {
                    setActiveDropdown(null); // بستن منوی جستجو
                }
            }
        };

        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [activeDropdown, setActiveDropdown]);



    useEffect(() => {
        if (activeDropdown === 'basket') {
            inputRef.current?.blur(); // حذف focus از ورودی جستجو
        }
    }, [activeDropdown]);


    const handleSearch = async () => {
        setActiveDropdown(null);
        if (!searchQuery || loading) return;
        setLoading(true);
        try {
            // شبیه‌سازی درخواست به API
            const response = await fetch(`http://localhost:5000/api/products/search?query=${searchQuery}`);
            const data = await response.json();
            setSearchResults(data);
            setActiveDropdown('search'); // باز کردن منوی جستجو
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleDropdown = () => {
        setActiveDropdown('search'); // باز کردن منو با کلیک
    };

    const handleBlur = () => {
        setActiveDropdown(null); // بستن منو با از دست دادن فوکوس
    };

    const isDropdownActive = activeDropdown === 'search'; // بررسی فعال بودن جستجو

    return (
        <>
            {isDropdownActive && <div className="c-cover is-active" onClick={() => setActiveDropdown(null)}></div>}
            <div className="c-header_search">
                <div className="c-search" ref={searchRef}>
                    <input
                        ref={inputRef}
                        type="text"
                        className="js-input_search"
                        name="searchbox"
                        placeholder="Search for your desired product, brand, or category."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClick={toggleDropdown} // باز کردن با کلیک
                        onBlur={handleBlur} // بستن با از دست دادن فوکوس
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <div className={`c-search_result ${isDropdownActive ? 'is-active' : ''}`}>
                        <div className="c-search_result-footer">
                            <ul>
                                {searchResults.length > 0
                                    ? searchResults.map((item, index) => (
                                          <li key={index}>
                                              <a href="#">{item.name}</a>
                                          </li>
                                      ))
                                    : mockData.slice(0, 6).map((item, index) => (
                                          <li key={index}>
                                              <a href="#">{item}</a>
                                          </li>
                                      ))}
                            </ul>
                        </div>
                    </div>
                    <button className="c-search_button" onClick={handleSearch}></button>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
