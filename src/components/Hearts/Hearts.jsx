import React from 'react';
import heartsImage from '../../images/hearts.png';
import './Hearts.css';

const Hearts = () => {
  return (
    <div className="hearts__container">
      <img src={heartsImage} alt="Сердца" className="hearts" />
    </div>
  );
};

export default Hearts;
