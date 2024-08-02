import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full flex justify-center">
            <div className="flex flex-col w-3/5 items-center justify-center">
              <div className="w-full justify-center items-center ">
                <p>{slide.message}</p>
              </div>
              <div className="mt-3 gap-3 w-full flex justify-center items-center ">
                <img
                  src={slide.image}
                  className="w-12 h-12 rounded-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
                <p>{slide.name}</p> / {slide.title} of {slide.company}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none text-black text-3xl"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center text-6xl">
          &#8249;
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none text-black text-3xl"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center text-6xl">
          &#8250;
        </span>
      </button>
    </div>
  );
};

export default Slider;
