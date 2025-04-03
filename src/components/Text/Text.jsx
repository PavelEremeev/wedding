import React from 'react';
import './Text.css';

export const Text = ({ children, size = 'm', color = 'black', titleFont = false, marginBottom, marginTop }) => {
  return (
    <p className={`text text--${size} text--${color} ${titleFont ? 'text--font' : ''}`} style={{marginBottom: marginBottom, marginTop: marginTop}}>
      {children}
    </p>
  );
};
