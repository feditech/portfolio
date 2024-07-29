import React, { useState, useEffect, useRef } from "react";
import "./progressbar.css"; // Import your CSS file

const ProgressBar = ({ value, name }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = progressBarRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={progressBarRef} className="progress-bar-container flex-col">
      <div className="progress-bar-labels">
        <span className="progress-bar-text">{name}</span>
      </div>
      <div className="flex justify-between gap-3 items-center ">
        <div className="progress-bar-background ">
          <div
            className={`progress-bar-fill ${isVisible ? "visible" : ""}`}
            style={{ width: isVisible ? `${value}%` : "0%" }}
          ></div>
        </div>
        <div className="progress-bar-value">{value}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;
