import React, { useState } from "react";
import styles from "../../style/Home2.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideData } from "../../interfaces/Types";
import Slides from "../../assets/files/json/Slides.json";

const slides: SlideData[] = Slides;

const PortfolioCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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
    <div className="mt-10">
      <Slider {...settings} afterChange={(current) => setActiveSlide(current)}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              transform: `scale(${index === activeSlide ? 1.8 : 0.8})`, // ✅ fixed template literal
              transition: "transform 0.3s ease",
              zIndex: index === activeSlide ? 1 : 0,
            }}
          >
            <img
              className={styles.carousel_img}
              src={slide.imgSrc}
              alt={`Slide ${index + 1}`}
              style={{ borderRadius: "20px", width: "auto", height: "300px" }}
            />
            <div className={styles.author_info}>
              <span>{slide.date}</span>
              <span>{slide.author}</span>
              <h5>{slide.description}</h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioCarousel;
