import React, { useState, useEffect, useRef } from "react";
import "./progressbar.css"; // Import your CSS file

const ProgressBar = ({ value, name }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
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
