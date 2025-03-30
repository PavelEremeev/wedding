import React from 'react';
import './Text.css';

export const Text = ({ children, size = 'm', color = 'black', marginBottom, marginTop }) => {
  return (
    <p className={`text text--${size} text--${color}`} style={{marginBottom: marginBottom, marginTop: marginTop}}>
      {children}
    </p>
  );
};
