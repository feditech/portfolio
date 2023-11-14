import React, { useState } from 'react';
import sun from '../assets/icons/sun.svg';
import moon from '../assets/icons/moon.svg';

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`toggle cursor-pointer relative w-14 pt-[2px] h-[32px]  border-2 border-black rounded-3xl flex  items-center `} onClick={toggleDarkMode}>
                <div
                    className={`icon-container absolute  left-0 transform ${isDarkMode ? 'translate-x-full ' : 'translate-x-0'
                        } transition-transform duration-1000`}
                >
                    <img src={sun} alt="sun" className="w-7 h-7" />
                </div>
            
                <div
                    className={`icon-container absolute  left-0 transform ${isDarkMode ? 'translate-x-full opacity-0' : 'translate-x-0'
                        } transition-transform duration-1000`}
                >
                    <img src={moon} alt="moon" className="w-7 h-7" />
                </div>
            
        </div>
    );
};

export default ThemeSwitcher;
