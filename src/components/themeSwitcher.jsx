import React, { useState, useEffect } from "react";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const rootElement = document.documentElement; // Get the HTML element

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Set or remove the 'dark' class based on the current state of 'isDarkMode'
    if (isDarkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div
      className={`toggle cursor-pointer   overflow-hidden relative w-14 pt-[2px] h-[32px]  border-2 ${
        isDarkMode ? "border-white" : "border-black"
      } rounded-3xl flex  items-center `}
      onClick={toggleDarkMode}
    >
      <div
        className={`icon-container absolute left-0 ${
          isDarkMode && "opacity-0"
        }      transform ${
          isDarkMode ? "translate-x-full " : "translate-x-0.5 "
        } transition-transform duration-500`}
      >
        <img src={sun} alt="sun" className="w-7 h-7" />
      </div>

      <div
        className={`icon-container absolute left-0  transform  ${
          !isDarkMode && "opacity-0"
        }   ${
          isDarkMode ? "translate-x-3/4 " : "translate-x-0"
        } transition-transform duration-500`}
      >
        <img src={moon} alt="moon" className="w-7 h-7" />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
