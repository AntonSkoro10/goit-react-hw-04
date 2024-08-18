import React from 'react';
import css from './ImageCard.module.css';

const ImageCard = ({ image, openModal }) => {
  return (
    <li className={css.card} onClick={() => openModal(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );
};

export default ImageCard;
