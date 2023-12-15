import React, { useState } from 'react';
import { Jaguslider } from './jaguslider';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
const ImageSliderj = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaAngleLeft className='left-arrow' onClick={prevSlide} />
      <FaAngleRight className='right-arrow' onClick={nextSlide} />
      {Jaguslider.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='carimage' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSliderj;