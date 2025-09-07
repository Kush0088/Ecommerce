import React, { useState, useEffect } from 'react';

const images = [
  '/images/offer1.jpeg',
  '/images/offer2.jpeg',
  'images/offer3.jpeg',
];


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  return (
    <div style={styles.sliderContainer}>
      <button
        onClick={goPrev}
        style={{ ...styles.arrowBtn, left: '10px' }}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={styles.image}
      />
      <button
        onClick={goNext}
        style={{ ...styles.arrowBtn, right: '10px' }}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
};

const styles = {
  sliderContainer: {
    position: 'relative',
    width: '800px',
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  arrowBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.3)',
    border: 'none',
    color: 'white',
    fontSize: '30px',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '50%',
    userSelect: 'none',
    zIndex: 10,
  },
};

export default ImageSlider;
