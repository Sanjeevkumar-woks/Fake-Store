import { useState } from "react";

// Carousel images
const images = [
  "../public/cashback.jpg",
  "../public/onlineshoppping.webp",
  "sale.jpg",
];

const Carousel = () => {
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel functions
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Carousel functions
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-screen mb-5 mt-4">
      {/* Carousel Images */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 md:h-96 object-fit rounded-lg"
              style={{ flex: "0 0 100%" }}
            />
          ))}
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
      >
        ←
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
      >
        →
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
