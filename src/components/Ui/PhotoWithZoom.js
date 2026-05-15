import React from 'react';
import './PhotoWithZoom.css';

const PhotoWithZoom = ({ imageUrl, altText }) => {
  return (
    <div className="photo-zoom-container">
      <div className="photo-overlay"></div>
      <img src={imageUrl} alt={altText} className="photo-zoom-image" />
    </div>
  );
};

export default PhotoWithZoom;
