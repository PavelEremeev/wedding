
import React, { useEffect, useRef, useState } from 'react';
import furshet from '../../images/furshet.png';
import './Furshet.css';

export const Furshet = () => {
  const [cheers, setCheers] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const imgEl = imgRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imgEl.classList.remove('cheers');
          void imgEl.offsetWidth; // рефлоу
          imgEl.classList.add('cheers');
        }
      },
      { threshold: 0.5 }
    );

    if (imgEl) observer.observe(imgEl);

    return () => {
      if (imgEl) observer.unobserve(imgEl);
    };
  }, []);

  return (
    <div className="furshet-container">
      <img
        ref={imgRef}
        src={furshet}
        alt="Furshet"
        className={`furshet-img ${cheers ? 'cheers' : ''}`}
      />
    </div>
  );
}
