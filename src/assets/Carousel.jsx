// Import necessary libraries
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Carousel component
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://res.cloudinary.com/dlq6vkeio/image/upload/v1728626616/gytae6hluycneoparvuo.jpg",
    "https://res.cloudinary.com/dlq6vkeio/image/upload/v1728626616/gytae6hluycneoparvuo.jpg",
    "https://res.cloudinary.com/dlq6vkeio/image/upload/v1728626616/gytae6hluycneoparvuo.jpg",
    "https://res.cloudinary.com/dlq6vkeio/image/upload/v1728626616/gytae6hluycneoparvuo.jpg",
  ];

  return (
    <div style={{ width: "80%", margin: "0 auto"}}>
      <h2> Simple Image Carousel </h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} style={{ width: "100%" , height:"50%"}} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
