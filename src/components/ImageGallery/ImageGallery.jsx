import React from 'react';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li key={image.id} onClick={() => openModal(image)}>
          <img src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}
