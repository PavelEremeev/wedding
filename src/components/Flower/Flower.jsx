import React, { useEffect, useRef, useState } from 'react';
import flower from '../../images/flower.png';
import './Flower.css';

const Flower = ({marginTop, marginBottom}) => {
  const flowerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // только один раз
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (flowerRef.current) {
      observer.observe(flowerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <img
        ref={flowerRef}
        src={flower}
        alt="Flower"
				style={{marginTop: marginTop, marginBottom: marginBottom}}
        className={`flower ${animate ? 'fly-in' : ''}`}
      />
    </div>
  );
};

export default Flower;
