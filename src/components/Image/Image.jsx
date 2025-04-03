import React, { useEffect, useRef, useState } from 'react';
import './Image.css';

const Image = ({ className, src, marginBottom, marginTop, maxWidth, width }) => {
  const [visible, setVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
			style={{marginBottom: marginBottom, marginTop: marginTop, maxWidth: maxWidth, width: width}}
      ref={imageRef}
      src={src}
      alt={src}
      className={`${className} image ${visible ? 'visible' : ''}`}
    />
  );
};

export default Image;
