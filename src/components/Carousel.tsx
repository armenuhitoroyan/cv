import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "https://afsu.tohidur.com/img/clients-img-1.png", alt: "Client 1" },
  { src: "https://afsu.tohidur.com/img/clients-img-2.png", alt: "Client 2" },
  { src: "https://afsu.tohidur.com/img/clients-img-3.png", alt: "Client 3" },
  { src: "https://afsu.tohidur.com/img/clients-img-4.png", alt: "Client 4" },
  { src: "https://afsu.tohidur.com/img/clients-img-5.png", alt: "Client 5" },
  { src: "https://afsu.tohidur.com/img/clients-img-1.png", alt: "Client 1" },
  { src: "https://afsu.tohidur.com/img/clients-img-2.png", alt: "Client 2" },
  { src: "https://afsu.tohidur.com/img/clients-img-3.png", alt: "Client 3" },
  { src: "https://afsu.tohidur.com/img/clients-img-4.png", alt: "Client 4" },
  { src: "https://afsu.tohidur.com/img/clients-img-5.png", alt: "Client 5" },
];

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className={`relative max-w-6xl mx-auto overflow-hidden p-2`}>
      <Slider {...settings}>
        {images.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              style={{ borderRadius: "20px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
