import React, { useEffect, useState } from 'react';
import '../styles/Carousel.scss';
import banner1 from '../assets/images/Banners/Banner1.png';
import banner2 from '../assets/images/Banners/Banner2.png';

const banners = [banner1, banner2, banner1];

function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-carousel">
      {banners.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          className={`banner-image ${index === current ? 'active' : ''}`}
        />
      ))}

      {}
      <div className="carousel-dots">
        {banners.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {}
      <button className="carousel-btn">Conheça agora!</button>
    </div>
  );
}

export default BannerCarousel;
