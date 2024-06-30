import React, { useState, useEffect } from "react";
import { FaGlobe, FaLinkedin } from "react-icons/fa";
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="grid grid-cols-3 gap-3 text-white">
              <div className="flex flex-col gap-1 mt-3 justify-center items-center border-r border-gray-600">
                <img src={item.image} className="w-16 h-16" alt="logo" />
                <h3 className="text-2xl font-bold gradient-text">
                  {item.name}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="text-purple-500" />
                  </a>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-purple-500" />
                  </a>
                </div>
                <p>Software Engineer</p>
                <p>{item.year}</p>
              </div>
              <div className="col-span-2 overflow-auto mt-3 text-sm">
                <p className="overflow-auto">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-purple-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
