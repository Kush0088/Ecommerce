import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/600x200?text=Slide+1',
  'https://via.placeholder.com/600x200?text=Slide+2',
  'https://via.placeholder.com/600x200?text=Slide+3',
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prev}>&lt;</button>
      <img src={images[index]} alt="carousel" />
      <button onClick={next}>&gt;</button>
    </div>
  );
};

export default Carousel;
