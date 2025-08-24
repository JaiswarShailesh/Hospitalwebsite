"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroBanner({ images }) {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // If no images
  if (!images || images.length === 0) return null;

  // If only one image
  if (images.length === 1) {
    return (
      <div className="w-full">
        <img
          src={images[0]}
          alt="Banner"
          className="w-100 h-auto object-cover img-fluid"
        />
      </div>
    );
  }

  // Multiple images → slider
  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-100 h-auto object-cover img-fluid"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
